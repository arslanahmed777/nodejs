const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

// importing models
const Users = require("../models/signin.model");

async function signin(req, res) {
  const { email, password } = req.body;
  const user = await Users.findOne({ email: email });
  if (!user) {
    return res.status(200).json({
      error:
        "There is no user record corresponding to this identifier. The user may have been deleted.",
    });
  }
  try {
    const match = password === user.password;
    if (!match) return res.send({ error: "Wrong password entered" });
    const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET_KEY, {
      expiresIn: "1h",
    });
    return res.send({ user, token });
  } catch (error) {
    console.log("login catch error:", error);
    return res.send({ error: "Enter Valid UserName or Password!!" });
  }
}

module.exports = {
  signin,
};
