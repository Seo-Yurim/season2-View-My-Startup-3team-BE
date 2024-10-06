import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// 나의 스타트업 선택 API
export const postMyStartups = async (req, res) => {
  const { id, sessionId } = req.body;

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
export const postComparisonStartups = async (req, res) => {
  const { ids, sessionId } = req.body;

  if (!Array.isArray(ids) || ids.length < 1 || ids.length > 5) {
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
