import express from 'express';
import asyncHandler from '../middleware/asyncHandler.js';
import { getStartups } from '../controller/startupController.js'

const router = express.Router();

router.get('/', asyncHandler(getStartups));

export default router;