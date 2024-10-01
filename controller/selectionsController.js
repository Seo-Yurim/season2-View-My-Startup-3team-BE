import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// 나의 스타트업 선택 API
export const patchMyStartups = async (req, res) => {
  const { id } = req.body;
  const sessionId = req.session.sessionId;
  console.log(sessionId);

  const [updateStartup, existingSelection] = await Promise.all([
    prisma.startup.update({
      where: { id },
      data: {
        selectedCount: {
          increment: 1,
        },
      },
    }),
    prisma.selection.findFirst({
      where: {
        sessionId,
        startupId: id,
      },
    }),
  ]);

  const newOrUpdateSelection = existingSelection
    ? await prisma.selection.update({
        where: { id: existingSelection.id },
        data: {
          isSelected: true,
          updatedAt: new Date(),
        },
      })
    : await prisma.selection.create({
        data: {
          sessionId,
          startupId: id,
          isSelected: true,
          createdAt: new Date(),
        },
      });

  res.send({ updateStartup, newOrUpdateSelection });
};

// 비교할 스타트업 여러개 선택 API
export const patchComparisonStartups = async (req, res) => {
  const { ids } = req.body;
  console.log(ids);
  const sessionId = req.session.sessionId;

  if (!Array.isArray(ids) || ids.length < 1 || ids > 5) {
    return res
      .status(400)
      .send({ message: "1개에서 5개 사이의 스타트업을 골라야 합니다." });
  }
  const [updateStartups, existingComparisons] = await Promise.all([
    Promise.all(
      ids.map((id) =>
        prisma.startup.update({
          where: { id },
          data: {
            comparedCount: {
              increment: 1,
            },
          },
        }),
      ),
    ),

    Promise.all(
      ids.map((id) =>
        prisma.comparison.findFirst({
          where: {
            sessionId: sessionId,
            startupId: id,
          },
        }),
      ),
    ),
  ]);

  const newOrUpdateComparisons = await Promise.all(
    existingComparisons.map((comparison, index) => {
      if (comparison) {
        return prisma.comparison.update({
          where: { id: comparison.id },
          data: {
            isCompared: true,
            updatedAt: new Date(),
          },
        });
      } else {
        return prisma.comparison.create({
          data: {
            sessionId: sessionId,
            startupId: ids[index],
            isCompared: true,
            createdAt: new Date(),
          },
        });
      }
    }),
  );

  res.send({ updateStartups, newOrUpdateComparisons });
};

// 비교할 기업 선태 취소 API
export const patchUnselect = async (req, res) => {
  const { id } = req.body;
  const sessionId = req.session.sessionId;

  const startup = await prisma.startup.findUnique({
    where: { id },
  });

  if (!startup) {
    return res.status(404).send({ message: "기업을 찾을 수 없습니다." });
  }

  const comparison = await prisma.comparison.findFirst({
    where: {
      sessionId: sessionId,
      startupId: id,
      isCompared: true,
    },
  });

  const updateComparsion = await prisma.comparison.update({
    where: {
      id: comparison.id,
    },
    data: {
      isCompared: false,
      updatedAt: new Date(),
    },
  });

  res.send(updateComparsion);
};

// 전체 선택 취소 및 초기화 API
export const patchReset = async (req, res) => {
  const sessionId = req.session.sessionId;

  await Promise.all([
    prisma.selection.updateMany({
      where: { sessionId, isSelected: true },
      data: { isSelected: false },
    }),
    prisma.comparison.updateMany({
      where: { sessionId, isCompared: true },
      data: { isCompared: false },
    }),
  ]);

  const [updatedSelections, updatedComparisons] = await Promise.all([
    prisma.selection.findMany({
      where: { sessionId },
      select: {
        startupId: true,
        isSelected: true,
        updatedAt: true,
      },
    }),
    prisma.comparison.findMany({
      where: { sessionId },
      select: {
        startupId: true,
        isCompared: true,
        updatedAt: true,
      },
    }),
  ]);

  res.send({
    updatedSelections,
    updatedComparisons,
  });
};
