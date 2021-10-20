const express = require("express");
const UpdateProfileRouter = express.Router();


// importing Controllers
const UpdateProfileController = require("../controllers/updateProfile.controller");

// importing compare middleware
const checkUser = require("../middlewares/compareTokenMiddleware")


// update profile middleware
UpdateProfileRouter.use((req, res, next) => {
    console.log("UpdateProfile router midddleware run");
    next();
});
UpdateProfileRouter.post("/", checkUser, UpdateProfileController.updateProfile);

module.exports = UpdateProfileRouter;