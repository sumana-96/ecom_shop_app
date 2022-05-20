const express = require("express");
const { PrismaClient } = require("@prisma/client");
const {HttpStatus} = require("../../lib/constants");
const app = express();
app.use(express.json());
const prisma = new PrismaClient();

const bodyParser = require("body-parser");
const { body, validationResult } = require("express-validator");
const saltRounds = 10;
const bcrypt = require("bcrypt");
const cookieParser = require("cookie-parser");
const { createTokens } = require("../../config/JWT");

app.use(cookieParser());
app.use(bodyParser.json());

const createUser = app.post("/signup", body("password").isLength({ min: 6 }),
async function (req, res) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const message = "user created successfully";
    const {
      email,
      password,
      confirmPwd,
      firstname,
      lastname,
      isAdmin
    } = req.body
    if (password !== confirmPwd) {
      return res.json("password not matched");
    } else {
      const is_admin = isAdmin == "true"? true : false;
      const hash = await bcrypt.hash(password, saltRounds);
      const createdUser = await prisma.user.create({
        data: {
          email: email,
          password: hash,
          first_name: firstname,
          last_name: lastname,
          isAdmin: is_admin
        },
      });
      res.status(HttpStatus.STATUS_CREATED).json(message);
    }
  } catch (err) {
    return res.status(HttpStatus.STATUS_ERROR).json(err);
  }
}
);

const loginUser = app.post("/login", async function (req, res) {
try {
  const message = "user logged in successfully";
  const { email, password } = req.body;

  const user = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });
  if (user) {
    const validPassword = await bcrypt.compare(password, user.password);
    if (validPassword) {
      const accessToken = createTokens(user);
      res.cookie("access-token", accessToken, {
        maxAge: 60 * 60 * 24 * 30 * 1000,
      });
      res.status(STATUS_OK).json({ message });
    } else {
      res.status(400).json({ error: "Invalid Password" });
    }
  } else {
    res.status(401).json({ error: "User does not exist" });
  }
} catch (err) {
  return res.status(HttpStatus.STATUS_ERROR).json(err);
}
});

module.exports = {
  createUser,
  loginUser,
};