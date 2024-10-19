import express from "express";
import session from "express-session";
import dotenv from "dotenv";
import userRouter from "./routes/userRouter.js";
import cors from "cors";

dotenv.config();


const app = express();
const corsOptions = {
    origin: 'http://localhost:5173', 
    credentials: true, 
};
app.use(cors(corsOptions));
app.use(express.json());

app.use(session({ secret: process.env.SECRET, resave: false, saveUninitialized: true, cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 30,
}}));
app.use(express.urlencoded({ extended: false }));

app.use("/api", userRouter);

app.listen(3000, () => console.log("app listening on port 3000!"));


