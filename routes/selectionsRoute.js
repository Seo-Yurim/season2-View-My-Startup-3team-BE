import express from "express";
import asyncHandler from "../middleware/asyncHandler.js";
import {
  patchMyStartups,
  patchComparisonStartups,
  patchUnselect,
  patchReset,
} from "../controller/selectionsController.js";

const router = express.Router();

// 나의 스타트업 선택 API
router.patch("/my-startups", asyncHandler(patchMyStartups));

// 비교할 스타트업 선택 API
router.patch("/comparison-startups", asyncHandler(patchComparisonStartups));

// 선태 취소 API
router.patch("/unselect", asyncHandler(patchUnselect));

// 전체 선택 취소 및 초기화 API
router.patch("/reset", asyncHandler(patchReset));

export default router;
