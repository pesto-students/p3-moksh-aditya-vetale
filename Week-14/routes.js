const db = require("./connection");
const express = require("express");
const routes = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const SECRET_KEY = "gscaygcjasvcg9876541876421346372632346*(^%#$%^";

routes.post("/SignUpUser", async (req, res) => {
  const { username, password, email } = req.body;
  const hash = await bcrypt.hash(password, 10);
  try {
    const response = await db.create({
      username,
      password: hash,
      email,
      wealth_details: { Stocks: req.body.stocks },
    });
    console.log(`${username} registered`);
    res.json(response);
  } catch (err) {
    if (err.code === 11000) {
      return res.json({ err });
    }
    throw err;
  }
});

routes.post("/LogIn", async (req, res) => {
  const { username, password } = req.body;
  const user = await db.collection.findOne({ username });

  if (!user) {
    return res.json({ error: "Invalid username/password" });
  }

  if (await bcrypt.compare(password, user.password)) {
    const accessToken = jwt.sign(
      { id: user._id, username: user.username },
      SECRET_KEY
    );
    console.log("User logged in");
    res.cookie("jwt", accessToken);
    res.json({ status: "User Logged In" });
  }
});

routes.get("/setCookie", (req, res) => {
  res.cookie(
    "jwt",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNGY4ODQyOGM5YzA5ZmFiMTk2NWI0NSIsInVzZXJuYW1lIjoidmlyYXQudmV0YWxlIiwiaWF0IjoxNjY2MTY2MDE5fQ.lVqXDeG-E-K3UxKkq72yUffQo8lOPRvmN5dVPXtiJHs"
  );
  res.send("hi");
});

routes.get("/getCookie", (req, res) => {
  res.send(req.cookies);
});

routes.get("/UserDetails", async (req, res) => {
  // details of logged in user
  try {
    const requiredToken = jwt.verify(req.cookies.jwt, SECRET_KEY);
    const username = requiredToken.username;
    const userDetails = await db.collection.findOne({ username });
    res.send(userDetails);
  } catch (error) {
    console.error(error);
    res.send("Please Log in to get details");
  }
});

routes.get("/LogOut", (req, res) => {
  try {
    res.clearCookie("jwt", {
      path: "/",
    });
    res.send(req.cookies.jwt);
  } catch (e) {
    throw err;
  }
});
module.exports = routes;
