const {Router} = require("express");
const userRouter = Router();
const authController = require("../controllers/authController");

userRouter.post("/login", authController.postLogin);
userRouter.post("/logout", authController.postLogout);
userRouter.post("/register", authController.postRegister);
userRouter.get("/dashboard", authController.getDashboard);

module.exports = userRouter;