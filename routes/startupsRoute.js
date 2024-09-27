import express from 'express';
import asyncHandler from '../middleware/asyncHandler.js';
import { getStartupById, getStartups } from '../controller/startupController.js'

const router = express.Router();

router.get('/', asyncHandler(getStartups));
router.get('/:id', asyncHandler(getStartupById));

export default router;