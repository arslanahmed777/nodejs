const express = require("express");
const SignupRouter = express.Router();

//importing controllers
const SignupController = require("../controllers/signup.controller")

SignupRouter.use(function (req, res, next) {
    console.log("signup router midddleware run");
    next();
})

SignupRouter.post("/", SignupController.signup);

module.exports = SignupRouter;