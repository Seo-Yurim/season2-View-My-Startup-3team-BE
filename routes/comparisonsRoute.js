import express from "express";
import asyncHandler from "../middleware/asyncHandler.js";
import { PrismaClient } from "@prisma/client";
const router = express.Router();
const prisma = new PrismaClient();

// 비교할 기업 검색 API
router.get(
  "/my-startups",
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
      startups,
    });
  }),
);

// 최근 선택된 기업 조회 API
router.get("/my-startups/recently-selected", async (req, res) => {
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
});

export default router;
