import express from "express";
import asyncHandler from "../middleware/asyncHandler.js";
import {
  getStartupList,
  getRecentSelect,
  getCompare,
} from "../controller/comparisonsController.js";

const router = express.Router();

// 스타트업 목록 조회 API (검색, 페이지네이션)
router.get("/startup-list", asyncHandler(getStartupList));

// 최근 선택된 스타트업 조회 API
router.get("/recent-select", asyncHandler(getRecentSelect));

// 스타트업 비교 결과 조회 API
router.get("/compare", asyncHandler(getCompare));

export default router;
