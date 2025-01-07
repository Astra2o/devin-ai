import { Router } from "express";
import { createUser, loginUser, logoutUser } from "./userController.js";
import { body } from "express-validator";
import { authUser } from "../middlewares/authMiddleware.js";
body
const userRouter = Router();

userRouter.post('/register' ,createUser)
userRouter.post('/login' ,loginUser)
userRouter.post('/logout',authUser ,logoutUser)



export default userRouter


