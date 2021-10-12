require('dotenv').config();
const express = require("express");
const path = require("path");
var cors = require("cors");
const mongoose = require("mongoose");


// importing Routers
const signinRouter = require("./routes/signin.routes");
const signupRouter = require("./routes/signup.routes")
const zipRouter = require("./routes/zip.router");

const app = express();
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`listning on port ${PORT}`);
});
var whitelist = ["http://localhost:5000", "http://example2.com"];
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
app.use("/zip", zipRouter);
