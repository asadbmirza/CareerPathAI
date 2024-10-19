import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import db from "../db/queries.js";

function checkPassword(password)
{
    const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return re.test(password);
}

async function checkEmail(email){
    const result = await db.getUserByEmail(email);
    console.log(result);
    return result.length > 0;
}

async function checkUsername(username){
    const result = await db.getUserByUsername(username);
    console.log(result);
    return result.length > 0;
}

const postLogin = async (req, res, next) => {
  try {
    const user = await db.getUserByUsername(req.body.username);
    if (user.length === 0) {
      return res.status(401).json({ message: "Username does not exist" });
    }
    const validPassword = await bcrypt.compare(req.body.password, user[0].password);
    if (!validPassword) {
      return res.status(401).json({ message: "Invalid password" });
    }
    const token = jwt.sign({ id: user[0].id }, process.env.JWT_SECRET, { expiresIn: '3h' });

    return res.status(200).json({ message: "Login successful", user: user[0] , token: token });

  } catch (err) {
    res.status(500).send("An error occurred while logging in");
  }
  
};

const postRegister = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    
    if (await checkUsername(username)) {
      return res.status(401).send("Username already exists");
    }
    if (await checkEmail(email)) {
      return res.status(401).send("Email already exists");
    }
    if (!checkPassword(password)) {
      return res.status(401).send("Password is not strong enough");
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await db.createUser(username, email, hashedPassword);
    const token = jwt.sign({ id: newUser[0].id }, process.env.JWT_SECRET, { expiresIn: '3h' });


    return res.status(200).json({ message: "Login successful", user: newUser[0] , token: token });
  } catch (err) {
    res.status(500).send("An error occurred while registering");
  }
};

const getDashboard = (req, res) => {
  if (!req.isAuthenticated()) {
    return res.status(401).send("You are not authenticated");
  }
  res.send(`Welcome to your dashboard, ${req.user.username}`);
};

const postSkills = async (req, res) => {
  const { skills, location, education } = req.body;
  console.log(req.user);
  try {
    await db.createSkills(skills, req.user.id);
    await db.updateUser(
      req.user.id,
      req.user.username,
      req.user.email,
      req.user.password,
      education,
      location
    );
    res.status(200).send("Skills added successfully");
  } catch (err) {
    res.status(500).send("An error occurred while adding skills");
  }
};

export default {
  postLogin,
  postRegister,
  getDashboard,
  getSkills,
  postSkills,
};
