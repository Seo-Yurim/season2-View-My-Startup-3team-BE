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
  "/recent-select",
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

// 스타트업 비교 결과 조회 API
router.get(
  "/compare",
  asyncHandler(async (req, res) => {
    const { orderBy = "asc", sortBy = "actualInvest" } = req.query;
    const orderByOptions = {
      actualInvest: orderBy === "asc" ? "asc" : "desc",
      revenue: orderBy === "asc" ? "asc" : "desc",
      employees: orderBy === "asc" ? "asc" : "desc",
    };

    const startup = await prisma.startup.findMany({
      where: {
        isSelected: true,
      },
      orderBy: {
        [sortBy]: orderByOptions[sortBy],
      },
    });

    res.send(startup);
  }),
);

export default router;
