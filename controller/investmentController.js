import { PrismaClient } from "@prisma/client";
import { assert } from "superstruct";
import { CreateInvestment, PatchInvestment } from "../structs/investmentStruct";

const prisma = new PrismaClient();

export const createInvestment = async (req, res) => {
  assert(req.body, CreateInvestment);
  const { name, investAmount, comment, password } = req.body;
  const newInvestment = await prisma.mockInvestor.create({
    data: { name, investAmount, comment, password },
  });
  res.status(201).json(newInvestment);
};

export const patchInvestment = async (req, res) => {
  assert(req.body, PatchInvestment);
  const { id } = req.params;
  const investment = await prisma.mockInvestor.update({
    where: { id },
    data: req.body,
  });
  res.json(investment);
};

export const deleteInvestment = async (req, res) => {
  const { id } = req.params;
  await prisma.mockInvestor.delete({
    where: { id },
  });
  res.status(204).json();
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
    // case "actualInvestLowest":
    //   orderBy = { createdAt: "asc" };
    //   break;
    // case "actualInvestHighest":
    //   orderBy = { createdAt: "desc" };
    //   break;
    default:
      orderBy = { investAmount: "desc" };
  }

  const investments = await prisma.mockInvestor.findMany({
    orderBy,
    skip: offset,
    take: parseInt(pageSize),
  });
  res.json(investments);
};
