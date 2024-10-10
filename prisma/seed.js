import { PrismaClient } from "@prisma/client";
import { CATEGORIES, STARTUPS, MOCK_INVESTORS, SELECTIONS } from "./mock.js";

const prisma = new PrismaClient();

async function main() {
  await prisma.selection.deleteMany(); // 먼저 Selection 데이터 삭제
  await prisma.comparison.deleteMany(); // 다음으로 Comparison 데이터 삭제
  await prisma.mockInvestor.deleteMany();
  await prisma.startup.deleteMany();
  await prisma.category.deleteMany();

  await prisma.category.createMany({
    data: CATEGORIES,
    skipDuplicates: true,
  });

  await prisma.startup.createMany({
    data: STARTUPS,
    skipDuplicates: true,
  });

  await prisma.mockInvestor.createMany({
    data: MOCK_INVESTORS,
    skipDuplicates: true,
  });

  await prisma.selection.createMany({
    data: SELECTIONS,
    skipDuplicates: true,
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
