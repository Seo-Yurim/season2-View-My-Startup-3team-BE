import express from 'express';
import asyncHandler from '../middleware/asyncHandler.js';
import { getStartupById, getStartupRank, getStartups } from '../controller/startupController.js'

const router = express.Router();

router.get('/', asyncHandler(getStartups));
router.get('/:id', asyncHandler(getStartupById));
router.get('/:id/rank', asyncHandler(getStartupRank));      // ranking 위아래 2개씩 포함 5개 응답

export default router;