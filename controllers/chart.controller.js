// tip: for extra debbugging use this type of functions dont use arrow functions
const path = require("path");
const mongoose = require("mongoose");

// importing controllers
const chart = require("../models/chart.model");
const charts = require("../models/chart.model");

const projects = mongoose.model("projects", charts);
function getchart(req, res) {
  //res.send(friends);
  res.json(chart);
  //const image = path.join(__dirname, "..", "public", "images", "christian.jpg");
  //res.sendFile(image);
}

function getProjects(req, res) {
  try {
    projects
      .find()
      .then(async (result) => {
        if (result.length === 0) {
          console.log("data length", result.length);
          res.send({ message: "Projects not found!!" });
        } else {
          //console.log(result);
          res.send(result);
        }
      })
      .catch((error) => {
        console.log(error);
        res.status(400).json({ error: "error" });
      });
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  getchart,
  getProjects,
};
