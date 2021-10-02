const express = require("express");
const SigninRouter = express.Router();

// importing Controllers
const signinController = require("../controllers/signin.controller");

SigninRouter.post("/", signinController.signin);

module.exports = SigninRouter;
