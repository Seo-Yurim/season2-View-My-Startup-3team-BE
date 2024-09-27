import express from "express";
import asyncHandler from "../middleware/asyncHandler.js";
import {
  createInvestment,
  patchInvestment,
  deleteInvestment,
  getInvestments,
} from "../controller/investmentController.js";

const router = express.Router();

router.post("/", asyncHandler(createInvestment));
router.patch("/:id", asyncHandler(patchInvestment));
router.delete("/:id", asyncHandler(deleteInvestment));
router.get("/", asyncHandler(getInvestments));

export default router;
