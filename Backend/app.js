const { Pool } = require("pg");
const express = require("express");
const session = require("express-session");
require("dotenv").config();
const passport = require("passport");
const userRouter = require("./routes/userRouter");

const app = express();
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

app.use(session({ secret: process.env.SECRET, resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.urlencoded({ extended: false }));

app.use("/", userRouter);

app.listen(3000, () => console.log("app listening on port 3000!"));


