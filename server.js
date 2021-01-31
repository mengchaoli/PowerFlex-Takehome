const express = require("express");
const app = express();
const connectDb = require("./src/connection");
const bodyParser = require("body-parser");

const PORT = 8080;

// parse various different custom JSON types as JSON
app.use(bodyParser.json());
// parse some custom thing into a Buffer
app.use(bodyParser.raw({ type: "application/vnd.custom-type" }));
// parse an HTML body into a string
app.use(bodyParser.text({ type: "text/html" }));

// Define routes
app.use("/api/routes", require("./src/routes/index"));

app.listen(PORT, function () {
  console.log(`Listening on ${PORT}`);

  connectDb().then(() => {
    console.log("MongoDb connected");
  });
});
