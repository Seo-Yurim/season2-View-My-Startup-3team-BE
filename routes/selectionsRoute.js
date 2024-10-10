import express from "express";
import asyncHandler from "../middleware/asyncHandler.js";
import {
  postMyStartups,
  postComparisonStartups,
  postCancelMyStartups,
  postCancelComparisonStartups,
} from "../controller/selectionsController.js";

const router = express.Router();

// 나의 스타트업 선택 API
router.post("/my-startups", asyncHandler(postMyStartups));

// 비교할 스타트업 선택 API
router.post("/comparison-startups", asyncHandler(postComparisonStartups));

// 나의 스타트업 선택 취소 API
router.post("/cancel-my-startups", asyncHandler(postCancelMyStartups));

// 비교할 스타트업 여러개 선택 취소 API
router.post(
  "/cancel-comparison-startups",
  asyncHandler(postCancelComparisonStartups),
);

export default router;
