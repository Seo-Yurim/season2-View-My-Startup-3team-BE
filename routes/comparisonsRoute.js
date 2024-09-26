import express from "express";
import asyncHandler from "../middleware/asyncHandler.js";
import { PrismaClient } from "@prisma/client";
const router = express.Router();
const prisma = new PrismaClient();

// 스타트업 목록 조회 API (검색, 페이지네이션)
router.get(
  "/startup-list",
  asyncHandler(async (req, res) => {
    const { search = "", page = 1, limit = 10 } = req.query;
    const skip = (page - 1) * limit;
    const totalCount = await prisma.startup.count({
      where: {
        name: {
          contains: search,
          mode: "insensitive",
        },
      },
    });
    const startups = await prisma.startup.findMany({
      where: {
        name: {
          contains: search,
          mode: "insensitive",
        },
      },
      skip: skip,
      take: parseInt(limit),
    });
    res.send({
      currentPage: parseInt(page),
      totalPages: Math.ceil(totalCount / limit),
      totalCount,
      list: startups,
    });
  }),
);

// 최근 선택된 스타트업 조회 API
router.get(
  "/recent",
  asyncHandler(async (req, res) => {
    const selectedStartup = await prisma.startup.findMany({
      where: {
        count: {
          gt: 0,
        },
      },
      orderBy: {
        selectedAt: "desc",
      },
      take: 5,
    });

    res.send(selectedStartup);
  }),
);

// 나의 스타트업 선택 API
router.post(
  "/my-startups/select",
  asyncHandler(async (req, res) => {
    const { id } = req.body;
    const startups = await prisma.startup.update({
      where: { id },
      data: {
        count: {
          increment: 1,
        },
      },
    });
    res.send(startups);
  }),
);

// 비교할 스타트업 선택 API
router.post(
  "/comparison-startups/select",
  asyncHandler(async (req, res) => {
    const { id } = req.body;

    if (id.length < 1 || id > 5) {
      return res
        .status(400)
        .send({ message: "1개에서 5개 사이의 스타트업을 골라야 합니다." });
    }

    const updateStartups = await Promise.all(
      id.map(async (selectedId) => {
        return await prisma.startup.update({
          where: { id: selectedId },
          data: {
            count: {
              increment: 1,
            },
          },
        });
      }),
    );
    res.send(updateStartups);
  }),
);

export default router;
