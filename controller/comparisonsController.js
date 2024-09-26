import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getStartupList = async (req, res) => {
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
};

export const getRecentSelect = async (req, res) => {
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
};

export const getCompare = async (req, res) => {
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
};
