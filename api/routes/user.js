const express = require("express");
const userController = require("../app/controllers/user.js");
const router = express.Router();

router.post("/signup", userController.createUser);
router.get("/login", userController.loginUser);

module.exports = router;
