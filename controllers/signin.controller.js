const mongoose = require("mongoose");

// importing models
const Blog = require("../models/signin.model");

async function signin(req, res) {
  const { email, password } = req.body;
  const blogs = await Blog.findOne({ title: email });
  if (!blogs) {
    return res.status(200).json({ error: "not find" });
  }

  res.send(blogs);
  //   testusers.findOne({ country: "Croatia" }, function (err, adventure) {
  //     res.send(adventure);
  //   });
  //   if (!user) {
  //     // return res.send({ error: "Email not found" });
  //     // return res.json("Asdf");
  //     // res.status(400).send("Bad Reasdasdquest");
  //     return res.status(200).json({ error: "Unauthorized" });
  //   } else {
  //     return res.send(user);
  //   }

  //   try {
  //     testusers
  //       .find()
  //       .then(async (result) => {
  //         if (result.length === 0) {
  //           console.log("data length", result.length);
  //           res.send({ message: "Projects not found!!" });
  //         } else {
  //           console.log(req.body);
  //           res.send(result);
  //         }
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //         res.status(400).json({ error: "error" });
  //       });
  //   } catch (error) {
  //     console.log(error);
  //   }
}

module.exports = {
  signin,
};
