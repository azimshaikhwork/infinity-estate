import express from 'express'
import { userTest } from '../contorllers/user.contoller.js';

const router = express.Router();

router.get('/', userTest);

export default router;