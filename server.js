const express = require("express");
const path = require("path");
var cors = require("cors");

// importing Routers
const friendRouter = require("./routes/friends.routes");
const chartRouter = require("./routes/chart.routes");

const app = express();
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`listning on port ${PORT}`);
});
var whitelist = ["http://localhost:3000", "http://example2.com"];
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};
app.use(cors(corsOptions));
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

app.use("/friends", friendRouter);
app.use("/chart", chartRouter);
