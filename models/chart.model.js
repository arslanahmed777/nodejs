// const chart = [
//   { label: "testing1", data: [12, 12, 23, 65, 32, 53] },
//   { label: "testingc2", data: [22, 12, 13, 25, 12, 73] },
// ];

// module.exports = chart;

const mongoose = require("mongoose");

const charts = new mongoose.Schema({
  p_name: {
    type: String,
    required: true,
  },
  p_desc: {
    type: String,
    required: true,
    unique: true,
  },
});

mongoose.model("charts", charts);
