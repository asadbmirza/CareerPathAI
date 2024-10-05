const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcryptjs");
const db = require("../db/queries");

passport.use(
  new LocalStrategy(async (username, password, done) => {
    try {
      const user = await db.getUserByUsername(username);
      if (!user) {
        return done(null, false, { message: "Incorrect username" });
      }
      const match = await bcrypt.compare(password, user.password);
      if (!match) {
        return done(null, false, { message: "Incorrect password" });
      }
      return done(null, user);
    } catch (err) {
      return done(err);
    }
  })
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await db.getUserById(id); // Corrected to use id instead of username
    done(null, user);
  } catch (err) {
    done(err);
  }
});

const getUserProfile = (req, res) => {
  if (!req.isAuthenticated()) {
    return res.status(401).send("You are not authenticated");
  }
  if (!req.user) {
    return res.status(500).send("User data not found");
  }
  console.log(req.user);
  res.status(200).json(req.user);
};

const postLogin = (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      return res.status(500).json({ message: "Internal Server Error" });
    }
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" }); // Unauthorized
    }
    req.logIn(user, (err) => {
      if (err) {
        return res.status(500).json({ message: "Login failed" });
      }
      
      return res.status(200).json({ message: "Login successful", user: user}); // Successful login
    });
  })(req, res, next);
};

const postRegister = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    if (await db.getUserByUsername(username)) {
      return res.status(400).send("Username already exists");
    }
    if (await db.getUserByEmail(email)) {
      return res.status(400).send("Email already exists");
    }
    await db.createUser(username, email, hashedPassword);
    req.logIn(user, (err) => {
      if (err) {
        return res.status(500).json({ message: "Login failed" });
      }
      return res.status(200).json({ message: "Login successful" }); // Successful login
    });

    return res.status(200).json({ message: "Login successful" });

  } catch (err) {
    res.status(500).send("An error occurred while registering");
  }
};

const postLogout = (req, res) => {
  req.logout();
  if (err) {
    return res.status(500).json({ message: "Logout failed" });
  }
  return res.status(200).send("Logged out successfully");
};

const getDashboard = (req, res) => {
  if (!req.isAuthenticated()) {
    return res.status(401).send("You are not authenticated");
  }
  res.send(`Welcome to your dashboard, ${req.user.username}`);
};



module.exports = {
  getUserProfile,
  postLogin,
  postLogout,
  postRegister,
  getDashboard,
};
