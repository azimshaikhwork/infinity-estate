import express from 'express';
import { signUp } from '../contorllers/auth.controller.js';
const router = express.Router();

router.post('/signup', signUp)


export default router;