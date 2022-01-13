const express = require("express");
const ScannedRouter = express.Router();

// importing Controllers
const scannedController = require("../controllers/scanned.controller");


// importing compare middleware
const checkUser = require("../middlewares/compareTokenMiddleware")

// BlogsRouter middleware
ScannedRouter.use((req, res, next) => {
    console.log("Scanned router midddleware run");
    next();
});
ScannedRouter.post("/", scannedController.upload_Scanned);

module.exports = ScannedRouter;
