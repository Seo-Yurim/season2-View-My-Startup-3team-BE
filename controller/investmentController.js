import { PrismaClient } from "@prisma/client";
import { assert } from "superstruct";
import {
  CreateInvestment,
  PatchInvestment,
} from "../structs/investmentStruct.js";

const prisma = new PrismaClient();

export const createInvestment = async (req, res) => {
  assert(req.body, CreateInvestment);
  const { name, startupId, investAmount, comment, password } = req.body;

  // startupId 검증: 해당 ID의 스타트업이 존재하는지 확인
  const startupExists = await prisma.startup.findUnique({
    where: { id: startupId },
  });

  if (!startupExists) {
    return res.status(404).json({ error: "Startup not found" });
  }

  try {
    const newInvestment = await prisma.$transaction(async (prisma) => {
      const investment = await prisma.mockInvestor.create({
        data: { name, startupId, investAmount, comment, password },
      });

      await prisma.startup.update({
        where: { id: startupId },
        data: { simInvest: { increment: investAmount } },
      });
      return investment;
    });
    res.status(201).json(newInvestment);
  } catch (err) {
    res.status(500).json({ error: "투자 생성 중 오류가 발생했습니다." });
  }
};

export const patchInvestment = async (req, res) => {
  assert(req.body, PatchInvestment);
  const { id } = req.params;
  const { password, investAmount } = req.body;

  const investor = await prisma.mockInvestor.findUnique({
    where: { id: parseInt(id) },
  });

  if (!investor) {
    return res.status(404).json({ message: "투자자를 찾을 수 없습니다." });
  }

  if (password !== investor.password) {
    return res.status(403).json({ message: "비밀번호가 일치하지 않습니다." });
  }

  try {
    const investment = await prisma.$transaction(async (prisma) => {
      const oldInvestmentAmount = investor.investAmount;
      const updateInvestment = await prisma.mockInvestor.update({
        where: { id: parseInt(id) },
        data: req.body,
      });

      const difference = investAmount - oldInvestmentAmount;
      await prisma.startup.update({
        where: { id: investor.startupId },
        data: { simInvest: { increment: difference } },
      });
      return updateInvestment;
    });

    res.json(investment);
  } catch (err) {
    res.status(500).json({ error: "투자 수정 중 오류가 발생했습니다." });
  }
};

export const deleteInvestment = async (req, res) => {
  const { id } = req.params;
  const { password } = req.body;

  const investor = await prisma.mockInvestor.findUnique({
    where: { id: parseInt(id) },
  });

  if (!investor) {
    return res.status(404).json({ message: "투자자를 찾을 수 없습니다." });
  }

  if (password !== investor.password) {
    return res.status(403).json({ message: "비밀번호가 일치하지 않습니다." });
  }

  try {
    await prisma.$transaction(async (prisma) => {
      await prisma.mockInvestor.delete({
        where: { id: parseInt(id) },
      });

      await prisma.startup.update({
        where: { id: investor.startupId },
        data: { simInvest: { decrement: investor.investAmount } },
      });
    });
    res.status(204).json();
  } catch (err) {
    res.status(500).json({ error: "투자 삭제 중 오류가 발생했습니다." });
  }
};

export const getInvestments = async (req, res) => {
  const { page = 1, pageSize = 10, order = "investAmountHighest" } = req.query;
  const offset = (page - 1) * pageSize;

  let orderBy;
  switch (order) {
    case "investAmountLowest":
      orderBy = { investAmount: "asc" };
      break;
    case "investAmountHighest":
      orderBy = { investAmount: "desc" };
      break;
    case "actualInvestLowest":
      orderBy = {
        startup: {
          actualInvest: "asc",
        },
      };
      break;
    case "actualInvestHighest":
      orderBy = {
        startup: {
          actualInvest: "desc",
        },
      };
      break;
    default:
      orderBy = { investAmount: "desc" };
  }

  const investments = await prisma.mockInvestor.findMany({
    select: {
      startup: {
        select: {
          name: true,
          description: true,
          category: true,
          actualInvest: true,
          simInvest: true,
        },
      },
    },
    orderBy,
    skip: offset,
    take: parseInt(pageSize),
  });

  const rankedInvestments = investments.map((investment, index) => ({
    ...investment,
    rank: offset + index + 1,
  }));

  res.json(rankedInvestments);
};
