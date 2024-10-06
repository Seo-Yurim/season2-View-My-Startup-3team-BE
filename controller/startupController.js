import prisma from "../utils/prismaClient.js";

export const getStartups = async (req, res) => {
  const { 
    page = 1, 
    limit = 10, 
    order = 'total_investment', 
    sort = 'desc', keyword = '' 
  } = req.query;

  const safeSort = ['asc', 'desc'].includes(sort) ? sort : 'desc';
  const offset = (page - 1) * limit;
  const skip = offset;
  const take = parseInt(limit);

  const orderMapping = {
    total_investment: 'simInvest',
    revenue: 'revenue',
    employee_count: 'employees',
    createdAt: 'createdAt',
  };
  const orderField = orderMapping[order] || 'createdAt'; 
  const orderBy = { [orderField]: safeSort };

  const where = {
    AND: [
      keyword && {
        OR: [
          { name: { contains: keyword, mode: 'insensitive' } },
          { description: { contains: keyword, mode: 'insensitive' } },
        ],
      },
    ].filter(Boolean), // falsy한 값 제거
  };

  // 전체 스타트업 수 계산
  const totalCount = await prisma.startup.count({ where });

  // 순위를 계산하기 위해 필요한 필드만 전체 데이터에서 가져옵니다.
  const allStartups = await prisma.startup.findMany({
    where,
    orderBy,
    select: {
      [orderField]: true,
    },
  });
  

  // 순위 계산을 위한 변수 초기화
  let rank = 1;
  let previousValue = null;
  const valueToRankMap = new Map();

  // 전체 데이터를 순회하며 순위 계산
  allStartups.forEach((startup, index) => {
    const currentValue = startup[orderField];

    if (previousValue !== null && currentValue === previousValue) {
      // 이전 값과 동일하면 rank 유지
    } else {
      // 이전 값과 다르면 rank 업데이트
      rank = index + 1;
    }

    previousValue = currentValue;

    // 해당 값에 대한 순위를 맵에 저장
    if (!valueToRankMap.has(currentValue)) {
      valueToRankMap.set(currentValue, rank);
    }
  });

    // 현재 페이지의 스타트업 가져오기
    const startups = await prisma.startup.findMany({
      where,
      orderBy,
      skip,
      take,
      include: {
        category: true, // Category 테이블과의 관계를 포함
      },
    });
  
  // 현재 페이지의 스타트업에 순위 할당
  const formattedStartups = startups.map((startup) => {
    const { category, ...rest } = startup;
    const currentValue = startup[orderField];
    const startupRank = valueToRankMap.get(currentValue);

    return {
      ...rest,
      categoryName: category.category,
      rank: startupRank,
    };
  });

  res.send({
    list: formattedStartups,
    totalCount: totalCount,
  });
};

export const getStartupById = async (req, res) => {
  const {
    page = 1,
    limit = 10,
    order = 'investment_amount',
    sort = 'desc',
    keyword = '',
  } = req.query;

  const offset = (page - 1) * limit;
  const skip = offset;
  const take = parseInt(limit);

  const { id } = req.params;

  if (isNaN(id)) {
    return res
      .status(400)
      .send({ message: 'Invalid ID format. ID must be a number' });
  }

  const orderMapping = {
    investment_amount: 'investAmount',
    createdAt: 'createdAt',
    name: 'name',
  };
  const validSortValues = ['asc', 'desc'];
  const orderField = orderMapping[order] || 'investAmount';
  const sortOrder = validSortValues.includes(sort) ? sort : 'desc';

  const numId = parseInt(id);

  // 스타트업 정보 가져오기 (mockInvestors 제외)
  const startup = await prisma.startup.findUnique({
    where: { id: numId },
    include: {
      category: true, 
    },
  });

  if (!startup) {
    return res
      .status(404)
      .send({ message: 'No startup found with given ID' });
  }

  // 투자자 총 목록 가져오기 (전체 순위 계산을 위해)
  const allMockInvestors = await prisma.mockInvestor.findMany({
    where: {
      startupId: numId,
      ...(keyword && {
        OR: [
          { name: { contains: keyword, mode: 'insensitive' } },
          { comment: { contains: keyword, mode: 'insensitive' } },
        ],
      }),
    },
    orderBy: { [orderField]: sortOrder },
    select: {
      id: true,
      [orderField]: true,
    },
  });

  let rank = 1;
  let previousValue = null;
  const investorIdToRankMap = new Map();

  // 전체 투자자를 순회하며 순위 계산
  allMockInvestors.forEach((investor, index) => {
    const currentValue = investor[orderField];

    if (previousValue !== null && currentValue === previousValue) {
      // 이전 값과 동일하면 rank 유지
    } else {
      // 이전 값과 다르면 rank 업데이트
      rank = index + 1;
    }

    previousValue = currentValue;

    // 투자자의 ID를 키로 하여 순위를 맵에 저장
    investorIdToRankMap.set(investor.id, rank);
  });

  // 현재 페이지의 mockInvestors 가져오기
  const mockInvestors = await prisma.mockInvestor.findMany({
    where: {
      startupId: numId,
      ...(keyword && {
        OR: [
          { name: { contains: keyword, mode: 'insensitive' } },
          { comment: { contains: keyword, mode: 'insensitive' } },
        ],
      }),
    },
    orderBy: { [orderField]: sortOrder },
    skip,
    take,
    select: {
      id: true,
      name: true,
      startupId: true,
      investAmount: true,
      comment: true,
      createdAt: true,
      updatedAt: true,
    },
  });

  // 각 투자자에 순위 할당
  const formattedMockInvestors = mockInvestors.map((investor) => {
    const rank = investorIdToRankMap.get(investor.id);
    return {
      ...investor,
      rank,
    };
  });

  // mockInvestors 총 개수 계산
  const mockInvestorsCount = allMockInvestors.length;

  const { category, ...rest } = startup;
  const formattedStartup = {
    ...rest,
    categoryName: category.category,
  };

  res.send({
    startup: formattedStartup,
    mockInvestors: {
      list: formattedMockInvestors,
      totalCount: mockInvestorsCount,
    },
  });
};


/*
export const getStartupById = async (req, res) => {
  const { page = 1, limit = 10, order = 'invest_amount', sort = 'desc', keyword = '' } = req.query;

  const offset = (page - 1) * limit;
  const skip = offset;
  const take = parseInt(limit);

  const { id } = req.params;

  if(isNaN(id)) {
    return res.status(400).send({ message: 'Invalid ID format. ID must be a number' });
  }

  const orderMapping = {
    investment_amount: 'investAmount',
    createdAt: 'createdAt',
    name: 'name',
  };

  const validSortValues = ['asc', 'desc'];
  const orderField = orderMapping[order] || 'createdAt';
  const sortOrder = validSortValues.includes(sort) ? sort : 'desc';

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
*/