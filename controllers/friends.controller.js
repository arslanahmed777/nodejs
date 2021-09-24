// tip: for extra debbugging use this type of functions dont use arrow functions
const path = require("path");

// importing controllers
const friends = require("../models/friends.model");

function getfriends(req, res) {
  //res.send(friends);
  res.json(friends);
  //const image = path.join(__dirname, "..", "public", "images", "christian.jpg");
  //res.sendFile(image);
}

function getfriend(req, res) {
  const friendid = Number(req.params.friendid);
  const friend = friends[friendid];
  if (friend) {
    res.status(200).json(friend);
  } else {
    res.status(404).json({ error: "friend not exist" });
  }
}

module.exports = {
  getfriends,
  getfriend,
};
