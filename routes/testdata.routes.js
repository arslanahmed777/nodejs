const express = require("express");
const TestdataRouter = express.Router();

// importing Controllers
const testdataController = require("../controllers/testdata.controller");

// importing compare middleware
const checkUser = require("../middlewares/compareTokenMiddleware")

// testdata middleware
TestdataRouter.use(checkUser, (req, res, next) => {
    console.log("testdata router midddleware run");
    next();
});
TestdataRouter.post("/", testdataController.testdate);

module.exports = TestdataRouter;