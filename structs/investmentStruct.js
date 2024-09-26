import * as s from "superstruct";

export const CreateInvestment = s.object({
  name: s.size(s.string(), 1, 10),
  startupId: s.min(s.number(), 1),
  investAmount: s.min(s.number(), 1),
  comment: s.size(s.string(), 10, 100),
  password: s.size(s.string(), 6, 30),
});

export const PatchInvestment = s.partial(CreateInvestment);
