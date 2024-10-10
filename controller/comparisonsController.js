import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// 전체 스타트업 조회 API (검색, 정렬)
export const getStartup = async (req, res) => {
  const { search = "", page = 1, limit = 5 } = req.query;
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
    select: {
      id: true,
      image: true,
      name: true,
      category: true,
    },
  });

  res.send({
    currentPage: parseInt(page),
    totalPages: Math.ceil(totalCount / limit),
    totalCount,
    list: startups,
  });
};

// 최근 선택된 스타트업 조회 API
export const getRecentStartup = async (req, res) => {
  const recentStartups = await prisma.selection.findMany({
    include: {
      startup: {
        select: {
          id: true,
          image: true,
          name: true,
          category: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const uniqueStartups = recentStartups.filter(
    (value, index, self) =>
      index === self.findIndex((item) => item.startup.id === value.startup.id),
  );

  res.send({
    list: uniqueStartups,
  });
};

// 선택한 스타트업 비교 결과 조회 API
export const getCompare = async (req, res) => {
  const { orderBy = "desc", sortBy = "simInvest" } = req.query;
  const sessionId = req.query.sessionId;

  const validSortFields = ["simInvest", "revenue", "employees"];
  const validOrderTypes = ["asc", "desc"];

  if (!validSortFields.includes(sortBy)) {
    return res.status(400).send({ message: "유효하지 않은 정렬 필드입니다." });
  }

  if (!validOrderTypes.includes(orderBy)) {
    return res.status(400).send({ message: "유효하지 않은 정렬 방향입니다." });
  }

  // 전체 스타트업 목록 조회
  const allStartups = await prisma.startup.findMany({
    select: {
      id: true,
      name: true,
      description: true,
      image: true,
      category: true,
      simInvest: true,
      revenue: true,
      employees: true,
    },
  });

  const [selection, comparisons] = await Promise.all([
    prisma.selection.findFirst({
      where: {
        sessionId,
        isSelected: true,
      },

      select: {
        startup: {
          select: {
            id: true,
            name: true,
            description: true,
            image: true,
            category: true,
            simInvest: true,
            revenue: true,
            employees: true,
          },
        },
      },
    }),
    prisma.comparison.findMany({
      where: {
        sessionId,
        isCompared: true,
      },
      select: {
        startup: {
          select: {
            id: true,
            name: true,
            description: true,
            image: true,
            category: true,
            simInvest: true,
            revenue: true,
            employees: true,
          },
        },
      },
    }),
  ]);

  const selectedResult = selection?.startup;
  const comparisonResults = comparisons.map((comparison) => comparison.startup);

  const allResults = [selectedResult, ...comparisonResults].filter(Boolean);

  let rank = 1;
  let previousValue = null;
  const valueToRankMap = new Map();

  allResults.sort((a, b) => {
    const aValue = Number(a[sortBy]) || 0;
    const bValue = Number(b[sortBy]) || 0;

    return orderBy === "asc" ? aValue - bValue : bValue - aValue;
  });

  allStartups
    .sort((a, b) => {
      const aValue = Number(a[sortBy]) || 0;
      const bValue = Number(b[sortBy]) || 0;

      return orderBy === "asc" ? aValue - bValue : bValue - aValue;
    })
    .forEach((startup, index) => {
      const currentValue = startup[sortBy];

      if (previousValue !== null && currentValue === previousValue) {
      } else {
        rank = index + 1;
      }

      previousValue = currentValue;
      valueToRankMap.set(startup.id, rank);
    });

  const formattedResults = allResults.map((startup) => ({
    ...startup,
    rank: valueToRankMap.get(startup.id),
  }));

  res.send(formattedResults);
};
