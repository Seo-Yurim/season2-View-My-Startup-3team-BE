import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getStartups = async (req, res) => {
  const { page = 1, limit = 10, order = 'createdAt', sort = 'desc', keyword = '' } = req.query;

  const offset = (page - 1) * limit;
  const skip = offset;
  const take = parseInt(limit);

  const orderMapping = {
    totalInvestment: 'simInvest',
    revenue: 'revenue',
    employeeCount: 'employees',
    createdAt: 'createdAt',
  }
  const orderBy = { [orderMapping[order] || 'createdAt']: sort };

  const where = {
    AND: [
      keyword && {
        OR: [
          { name: { contains: keyword, mode: 'insensitive' } },
          { description: { contains: keyword, mode: 'insensitive' } }
        ]  
      },
    ].filter(Boolean),    // falsy한 값 제거
  }

  const startups = await prisma.startup.findMany({
    where,
    orderBy,
    skip,
    take,
  });

  const totalCount = await prisma.startup.count({ where });

  res.send({
    list: startups,
    totalCount: totalCount
  });
};
