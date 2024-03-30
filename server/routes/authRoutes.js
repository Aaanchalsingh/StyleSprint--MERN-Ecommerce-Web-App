import express from "express";
import { googleLogin } from '../controllers/auth.js';

const authRoutes=express.Router();

authRoutes.post('/googlelogin', googleLogin)

export default authRoutes;
