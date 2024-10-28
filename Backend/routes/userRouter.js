import { Router } from "express";
import authController from "../controllers/authController.js";
import skillsController from "../controllers/skillsController.js";
import authenticateJWT from "../controllers/authMiddleware.js";
import dashboardController from "../controllers/dashboardController.js";

const userRouter = Router();

userRouter.post("/login", authController.postLogin);
userRouter.post("/register", authController.postRegister);
userRouter.get("/dashboard", authenticateJWT, dashboardController.getDashboard);
userRouter.get("/skills", authenticateJWT, skillsController.getSkills);
userRouter.post("/skills", authenticateJWT, skillsController.postSkills);
export default userRouter;