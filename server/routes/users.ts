import express from "express";
import { loginUser, signupUser } from "../controllers/userController";

const router = express.Router();

//signup route
router.post('/signup', signupUser )

//login route
router.post('/login', loginUser)

export default router;