import express from "express";
import asyncHandler from "../middleware/asyncHandler.js";
import {
  postMyStartups,
  postComparisonStartups,
} from "../controller/selectionsController.js";

const router = express.Router();

// 나의 스타트업 선택 API
router.post("/my-startups", asyncHandler(postMyStartups));

// 비교할 스타트업 선택 API
router.post("/comparison-startups", asyncHandler(postComparisonStartups));

export default router;
