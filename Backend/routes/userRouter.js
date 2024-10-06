const {Router} = require("express");
const userRouter = Router();
const authController = require("../controllers/authController");

userRouter.post("/login", authController.postLogin);
userRouter.get("/user", authController.getUserProfile);
userRouter.post("/logout", authController.postLogout);
userRouter.post("/register", authController.postRegister);
userRouter.get("/dashboard", authController.getDashboard);
userRouter.post("/skills", authController.postSkills);
userRouter.get("/skills", authController.getSkills);
userRouter.get("/register", authController.getUser);
userRouter.get("/login", authController.getUser);

module.exports = userRouter;