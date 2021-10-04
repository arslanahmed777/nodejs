const express = require("express");
const SigninRouter = express.Router();

// importing Controllers
const signinController = require("../controllers/signin.controller");

// signin middleware
SigninRouter.use((req, res, next) => {
  console.log("sign router midddleware run");
  next();
});
SigninRouter.post("/", signinController.signin);

module.exports = SigninRouter;
