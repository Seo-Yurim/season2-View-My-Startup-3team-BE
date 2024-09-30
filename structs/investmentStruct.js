import * as s from "superstruct";

export const CreateInvestment = s.object({
  name: s.size(s.string(), 1, 30),
  startupId: s.min(s.number(), 1),
  investAmount: s.min(s.number(), 1),
  comment: s.size(s.string(), 10, Infinity),
  password: s.size(s.string(), 6, 100),
});

export const PatchInvestment = s.partial(CreateInvestment);
