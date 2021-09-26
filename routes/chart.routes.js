const express = require("express");
const chartRouter = express.Router();

// importing Controllers
const chartController = require("../controllers/chart.controller");

// chart middleware
chartRouter.use((req, res, next) => {
  console.log("chart router midddleware run");
  next();
});
chartRouter.get("/", chartController.getchart);

chartRouter.get("/projects", chartController.getProjects);

module.exports = chartRouter;
