const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const userRoute = require("./src/routes/user.route");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = 3003;

// Database Connection
require("./src/db/connection");

app.use(cors());

// Calling Routes
app.use("/api/user", userRoute);

app.use((req, res) => {
  console.log("Invalid Page Request");
  res
    .send(
      "<h1><i><strong> ( 404 ) Page Not Found , Invalid page request</i></h1>"
    )
    .status(400);
});

app.listen(port, () => {
  console.log(`server is starting on port ${port}`);
});
