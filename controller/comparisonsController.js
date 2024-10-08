import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// 최근 선택된 스타트업 조회 API
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
    orderBy: {
      updatedAt: "desc",
    },
  });

  res.send({
    currentPage: parseInt(page),
    totalPages: Math.ceil(totalCount / limit),
    totalCount,
    list: startups,
  });
};

export const getRecentStartup = async (req, res) => {
  // const { id } = req.body;
  const recentStartups = await prisma.selection.findMany({
    // where: {
    //   startupId: id,
    // },
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
  const { orderBy = "asc", sortBy = "actualInvest" } = req.query;
  const sessionId = req.body;

  const validSortFields = ["actualInvest", "revenue", "employees"];
  if (!validSortFields.includes(sortBy)) {
    return res.status(400).send({ message: "유효하지 않은 정렬 필드입니다." });
  }

  const [selection, comparisons] = await Promise.all([
    prisma.selection.findFirst({
      where: {
        sessionId,
        isSelected: true,
      },
      orderBy: {
        updatedAt: "desc",
      },
      select: {
        startup: {
          select: {
            id: true,
            name: true,
            description: true,
            category: true,
            actualInvest: true,
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
            category: true,
            actualInvest: true,
            revenue: true,
            employees: true,
          },
        },
      },
    }),
  ]);

  const selectedResult = selection.startup;
  const comparisonResults = comparisons.map((comparison) => comparison.startup);

  const allResults = [selectedResult, ...comparisonResults];

  allResults.sort((a, b) => {
    const aValue = a[sortBy];
    const bValue = b[sortBy];

    if (orderBy === "asc") {
      return aValue - bValue;
    } else {
      return bValue - aValue;
    }
  });

  res.send(allResults);
};
