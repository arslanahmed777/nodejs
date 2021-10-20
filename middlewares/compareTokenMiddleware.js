const express = require("express");
const jwt = require("jsonwebtoken");

module.exports = async (req, res, next) => {

  if (!req.headers.hasOwnProperty('authorization')) return res.json({ error: "Authorization Header is not present", });

  const bearerHeader = req.headers["authorization"];
  const token = bearerHeader.split(" ")[1];

  if (token) {
    await jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
      console.log("compareToken middleware run");
      if (err) {
        return res.json({ error: "Token is not valid", });
      }
      req.decoded = decoded;

      next();
    });
  } else {
    return res.json({ error: "Token not provided", });
  }
};
