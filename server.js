const express = require("express");

const app = express();

app.get("/", (req, res) => {
  console.log("hi");
  res.send("joakim");
});

app.listen(4000);
