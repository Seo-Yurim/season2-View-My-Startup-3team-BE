import prisma from "../utils/prismaClient.js";

export const getStartups = async (req, res) => {
  const { page = 1, limit = 10, order = 'total_investment', sort = 'desc', keyword = '' } = req.query;

  const safeSort = ['asc', 'desc'].includes(sort) ? sort : 'desc';
  const offset = (page - 1) * limit;
  const skip = offset;
  const take = parseInt(limit);

  const orderMapping = {
    total_investment: 'simInvest',
    revenue: 'revenue',
    employee_count: 'employees',
    createdAt: 'createdAt',
  }
  const orderBy = { [orderMapping[order] || 'createdAt']: safeSort };

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
    include: {
      category: true, // Category 테이블과의 관계를 포함
    }
  });

  const totalCount = await prisma.startup.count({ where });

  const formattedStartups = startups.map(startup => {
    const { category, ...rest } = startup;    // category 객체 제외
    return {
      ...rest,
      categoryName: category.category,// categoryName 추가
    }
  })

  res.send({
    list: formattedStartups,
    totalCount: totalCount
  });
};

export const getStartupById = async (req, res) => {
  const { page = 1, limit = 10, order = 'investAmount', sort = 'desc', keyword = '' } = req.query;

  const offset = (page - 1) * limit;
  const skip = offset;
  const take = parseInt(limit);

  const { id } = req.params;

  if(isNaN(id)) {
    return res.status(400).send({ message: 'Invalid ID format. ID must be a number' });
  }

  const numId = parseInt(id);
  const startup = await prisma.startup.findUnique({
    where: { id: numId },
    include: {
      mockInvestors: {
        orderBy:  { [order]: sort },
        skip,
        take,
      },
      category: true, // Startup 의 category 관계 포함
    },
  });
  if (!startup) {
    return res.status(404).send({message: 'No startup found with given ID'});
  }
  
  const { category, mockInvestors, ...rest } = startup;
  const formattedStartup = {
    ...rest,
    categoryName: category.category,
    mockInvestors,
  }
  // 전체 투자자수 계산
  const mockInvestorsCount = await prisma.mockInvestor.count({
    where: { startupId: numId },
  });
  res.send({
    startup: {
      ...formattedStartup,
      mockInvestorsCount,    
    },
  });
}