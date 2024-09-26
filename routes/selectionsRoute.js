import express from "express";
import asyncHandler from "../middleware/asyncHandler.js";
import { PrismaClient } from "@prisma/client";
const router = express.Router();
const prisma = new PrismaClient();

// 나의 스타트업 선택 API
router.patch(
  "/my-startups",
  asyncHandler(async (req, res) => {
    const { id } = req.body;
    const startups = await prisma.startup.update({
      where: { id },
      data: {
        count: {
          increment: 1,
        },
        isSelected: true,
        selectedAt: new Date(),
      },
    });
    res.send(startups);
  }),
);

// 비교할 스타트업 선택 API
router.patch(
  "/comparison-startups",
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
            isSelected: true,
            selectedAt: new Date(),
          },
        });
      }),
    );
    res.send(updateStartups);
  }),
);

// 선태 취소 API
router.patch(
  "/unselect",
  asyncHandler(async (req, res) => {
    const { id } = req.body;
    const startup = await prisma.startup.findUnique({
      where: { id },
    });

    if (!startup) {
      return res.status(404).send({ message: "기업을 찾을 수 없습니다." });
    }

    if (startup.count > 0) {
      const updateStartup = await prisma.startup.update({
        where: { id },
        data: {
          count: {
            decrement: 1,
          },
          isSelected: false,
        },
      });
      res.send(updateStartup);
    } else {
      res.status(400).send({ message: "이미 취소된 기업입니다." });
    }
  }),
);

// 전체 선택 취소 및 초기화 API
router.patch(
  "/reset",
  asyncHandler(async (req, res) => {
    const updatStartup = await prisma.startup.updateMany({
      where: { isSelected: true },
      data: { isSelected: false },
    });
    res.send(updatStartup);
  }),
);

export default router;
