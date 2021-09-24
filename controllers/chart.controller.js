// tip: for extra debbugging use this type of functions dont use arrow functions
const path = require("path");

// importing controllers
const chart = require("../models/chart.model");

function getchart(req, res) {
  //res.send(friends);
  res.json(chart);
  //const image = path.join(__dirname, "..", "public", "images", "christian.jpg");
  //res.sendFile(image);
}

module.exports = {
  getchart,
};
