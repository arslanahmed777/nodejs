const mongoose = require("mongoose");

// importing models
const Users = require("../models/signin.model");

async function signin(req, res) {
  const { email, password } = req.body;
  const users = await Users.findOne({ email: email });
  if (!users) {
    return res.status(200).json({ error: "not find" });
  }

  res.send(users);
}

module.exports = {
  signin,
};
