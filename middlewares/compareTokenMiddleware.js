const express = require("express");
const jwt = require("jsonwebtoken");

module.exports = async (req, res, next) => {
  const bearerHeader = req.headers["authorization"];
  const token = bearerHeader.split(" ")[1];

  if (token) {
    await jwt.verify(token, "asdfsasadfasdfse", (err, decoded) => {
      console.log("compareToken middleware run");
      if (err) {
        return res.json({
          success: false,
          message: "Token is not valid",
        });
      }
      req.decoded = decoded;

      next();
    });
  } else {
    return res.json({
      success: false,
      message: "Token not provided",
    });
  }
};
