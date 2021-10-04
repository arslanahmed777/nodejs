const express = require("express");
const ziprouter = express.Router();

// importing Controllers
const zipController = require("../controllers/zip.controller");

// friends middleware
ziprouter.use((req, res, next) => {
    console.log("Zip router midddleware run");
    next();
});

ziprouter.get("/", zipController.getzip);

module.exports = ziprouter;
