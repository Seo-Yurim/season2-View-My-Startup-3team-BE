import { PrismaClient } from "@prisma/client";
import { assert } from "superstruct";
import {
  CreateInvestment,
  PatchInvestment,
} from "../structs/investmentStruct.js";

const prisma = new PrismaClient();

// 투자 정보 생성
export const createInvestment = async (req, res) => {
  assert(req.body, CreateInvestment);
  const { name, startupId, investAmount, comment, password } = req.body;

  // 해당 스타트업 존재 여부 확인
  const startupExists = await prisma.startup.findUnique({
    where: { id: startupId },
  });

  if (!startupExists) {
    return res.status(404).json({ error: "Startup not found" });
  }

  // 트랜잭션 처리
  try {
    const newInvestment = await prisma.$transaction(async (prisma) => {
      // 투자 정보 생성
      const investment = await prisma.mockInvestor.create({
        data: { name, startupId, investAmount, comment, password },
      });

      // 생성 후 StartUp 테이블의 누적 모의 투자 금액 업데이트
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

// 투자 정보 수정
export const patchInvestment = async (req, res) => {
  assert(req.body, PatchInvestment);
  const { id } = req.params;
  const { password, investAmount } = req.body;

  // 수정하기 위해 비밀번호 검증
  const investor = await prisma.mockInvestor.findUnique({
    where: { id: parseInt(id) },
  });

  if (!investor) {
    return res.status(404).json({ message: "투자자를 찾을 수 없습니다." });
  }

  if (password !== investor.password) {
    return res.status(403).json({ message: "비밀번호가 일치하지 않습니다." });
  }

  // 트랜잭션 처리
  try {
    const investment = await prisma.$transaction(async (prisma) => {
      // 이전 투자 금액 저장
      const oldInvestmentAmount = investor.investAmount;
      // 투자 정보 수정
      const updateInvestment = await prisma.mockInvestor.update({
        where: { id: parseInt(id) },
        data: req.body,
      });

      // 이전 투자 금액과 수정된 투자 금액 비교
      const difference = investAmount - oldInvestmentAmount;
      // 비교 후 계산된 금액으로 StartUp 테이블 누적 모의 투자 금액 업데이트
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

// 투자 정보 삭제
export const deleteInvestment = async (req, res) => {
  const { id } = req.params;
  const { password } = req.body;

  // 삭제하기 위해 비밀번호 검증
  const investor = await prisma.mockInvestor.findUnique({
    where: { id: parseInt(id) },
  });

  if (!investor) {
    return res.status(404).json({ message: "투자자를 찾을 수 없습니다." });
  }

  if (password !== investor.password) {
    return res.status(403).json({ message: "비밀번호가 일치하지 않습니다." });
  }

  // 트랜잭션 처리
  try {
    await prisma.$transaction(async (prisma) => {
      // 투자 정보 삭제
      await prisma.mockInvestor.delete({
        where: { id: parseInt(id) },
      });

      // 투자 정보 삭제 시 StartUp 테이블 모의 투자 금액 업데이트(금액 차감)
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

// 투자 현황 목록 조회
export const getInvestments = async (req, res) => {
  const {
    page = 1,
    limit = 10,
    order = "invest_amount",
    sort = "desc",
  } = req.query;
  const offset = (page - 1) * limit;

  // 투자 현황 목록 정렬 기준
  let orderBy;
  switch (order) {
    case "invest_amount":
      orderBy = { investAmount: sort === "asc" ? "asc" : "desc" };
      break;
    case "actual_invest":
      orderBy = {
        startup: {
          actualInvest: sort === "asc" ? "asc" : "desc",
        },
      };
      break;
    default:
      orderBy = { investAmount: "desc" };
  }

  // 투자 현황 목록 가져오기
  const investments = await prisma.mockInvestor.findMany({
    select: {
      startup: {
        select: {
          image: true,
          name: true,
          description: true,
          category: true,
          actualInvest: true,
        },
      },
      investAmount: true,
    },
    orderBy,
    skip: offset,
    take: parseInt(limit),
  });

  res.json(investments);
};
