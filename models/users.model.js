const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema(
  {
    email: {
      type: String,
    },
    name: {
      type: String,
    },
    password: {
      type: String,
    },
  },
  { timestamps: true }
);

const Users = mongoose.model("User", usersSchema);
module.exports = Users;
