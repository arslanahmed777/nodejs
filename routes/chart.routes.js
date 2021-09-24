const express = require("express");
const chartRouter = express.Router();

// importing Controllers
const chartController = require("../controllers/chart.controller");

// friends middleware
chartRouter.use((req, res, next) => {
  console.log("chart router midddleware run");
  next();
});
chartRouter.get("/", chartController.getchart);

module.exports = chartRouter;
