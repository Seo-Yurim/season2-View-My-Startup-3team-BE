import express from "express";
import asyncHandler from "../middleware/asyncHandler.js";
import {
  getCompare,
  getRecentStartup,
  getStartup,
} from "../controller/comparisonsController.js";

const router = express.Router();

// 최근 선택된 스타트업 조회 API
router.get("/recent-select", asyncHandler(getStartup));

router.get("/recent-selection", asyncHandler(getRecentStartup));

// 선택한 스타트업 비교 결과 조회 API
router.get("/compare", asyncHandler(getCompare));

export default router;
