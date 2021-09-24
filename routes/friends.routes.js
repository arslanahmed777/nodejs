const express = require("express");
const friendsRouter = express.Router();

// importing Controllers
const friendsController = require("../controllers/friends.controller");

// friends middleware
friendsRouter.use((req, res, next) => {
  console.log("friends router midddleware run");
  next();
});

friendsRouter.get("/", friendsController.getfriends);
friendsRouter.get("/:friendid", friendsController.getfriend);

module.exports = friendsRouter;
