import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getStartups = async (req, res) => {
  const startups = await prisma.startup.findMany({
    take: 10,
  });

  const totalCount = await prisma.startup.count();

  res.send({
    list: startups,
    totalCount: totalCount
  });
};
