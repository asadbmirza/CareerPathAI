import { Router } from "express";
import authController from "../controllers/authController.js";
const userRouter = Router();

userRouter.post("/login", authController.postLogin);
userRouter.post("/register", authController.postRegister);
// userRouter.get("/dashboard", authController.getDashboard);
// userRouter.post("/skills", authController.postSkills);
// userRouter.get("/skills", authController.getSkills);
export default userRouter;