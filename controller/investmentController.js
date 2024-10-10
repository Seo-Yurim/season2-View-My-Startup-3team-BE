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
    console.error("Error during transaction:", err); // 전체 에러 객체 출력
    res.status(500).json({
      error: "투자 생성 중 오류가 발생했습니다.",
      details: err.meta?.target || err.message || err,
    });
  }
};

// 투자 정보 수정
export const patchInvestment = async (req, res) => {
  assert(req.body, PatchInvestment);
  const { id } = req.params;
  const { name, investAmount, comment, password } = req.body;

  // 투자자 정보 가져오기
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
      const oldInvestmentAmount = investor.investAmount;

      const updateInvestment = await prisma.mockInvestor.update({
        where: { id: parseInt(id) },
        data: req.body,
      });

      const difference = BigInt(investAmount) - BigInt(oldInvestmentAmount);
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

  const investor = await prisma.mockInvestor.findUnique({
    where: { id: parseInt(id) },
  });

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
    console.log(err);
    res.status(500).json({ error: "투자 삭제 중 오류가 발생했습니다." });
  }
};

// 투자 현황 목록 조회
export const getInvestments = async (req, res) => {
  const {
    page = 1,
    limit = 10,
    order = "sim_invest",
    sort = "desc",
  } = req.query;

  const offset = (page - 1) * limit;

  // 투자 현황 목록 정렬 기준
  let orderBy;
  switch (order) {
    case "sim_invest":
      orderBy = {
        startup: {
          simInvest: sort === "asc" ? "asc" : "desc",
        },
      };
      break;
    case "actual_invest":
      orderBy = {
        startup: {
          actualInvest: sort === "asc" ? "asc" : "desc",
        },
      };
      break;
    default:
      orderBy = { startup: { simInvest: "desc" } };
  }

  // 투자 현황 목록 가져오기
  const investments = await prisma.mockInvestor.findMany({
    select: {
      startup: {
        select: {
          id: true,
          image: true,
          name: true,
          description: true,
          category: {
            select: {
              category: true,
            },
          },
          simInvest: true,
          actualInvest: true,
        },
      },
      id: true,
    },
    orderBy,
  });

  const formattedInvestments = investments.map((investment) => ({
    ...investment,
    startup: {
      ...investment.startup,
      categoryName: investment.startup.category.category,
    },
  }));

  // 기업 중복 제거
  const filteredInvestments = [];
  const existCompanies = new Set();

  formattedInvestments.forEach((item) => {
    if (!existCompanies.has(item.startup.name)) {
      existCompanies.add(item.startup.name);
      filteredInvestments.push(item);
    }
  });

  // 페이지네이션
  const paginatedInvestments = filteredInvestments.slice(
    offset,
    offset + parseInt(limit),
  );
  const totalCount = filteredInvestments.length;

  res.json({ list: paginatedInvestments, totalCount });
};
