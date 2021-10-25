require('dotenv').config();
const express = require("express");
const http = require("http")
const path = require("path");
var cors = require("cors");
const mongoose = require("mongoose");
const socketio = require("socket.io")


// importing Routers
const signinRouter = require("./routes/signin.routes");
const signupRouter = require("./routes/signup.routes")
const zipRouter = require("./routes/zip.router");
const updateProfileRouter = require("./routes/updateProfile.routes")

const app = express();

const server = http.createServer(app);

const io = socketio(server, { cors: { origin: "*" } })

// Run when client connects
io.on('connection', (socket) => {
  console.log("We have new connection");

  socket.on("join", ({ name }, callback) => {
    console.log("params", name);
    callback(name)
  })

  socket.on("sendMessage", (data) => {
    console.log(data);
    socket.broadcast.emit("message", data)
  })

  socket.on('disconnect', () => {
    console.log("User has left");
  })
})

const PORT = process.env.PORT;
server.listen(PORT, () => {
  console.log(`listning on port ${PORT}`);
});
var whitelist = ["http://192.168.104.156:5000", "http://example2.com"];
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};
app.use(cors());

// ====== This is a main middleware that logs our request =====
app.use((req, res, next) => {
  const start = Date.now();

  next();
  const delta = Date.now() - start;
  console.log(`response: ${req.method} ${req.baseUrl} ${req.url} ${delta}ms`);
});
// ====== ************************* =====
app.use("/site", express.static(path.join(__dirname, "public")));
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/testdb", {
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("err", (err) => {
  console.log(err);
});

db.once("open", () => {
  console.log("Database Connection established");
});

app.use("/signin", signinRouter);
app.use("/signup", signupRouter)
app.use("/updateprofile", updateProfileRouter)
app.use("/zip", zipRouter);
