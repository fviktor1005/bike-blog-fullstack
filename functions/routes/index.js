const express = require("express");
const config = require("../config");
const router = express.Router();
const mongoose = require("mongoose");

mongoose
  .connect(config.connectString, { useNewUrlParser: true })
  .then(() => console.log("connected to goose!"))
  .catch(e => console.error(e));

/* GET home page. */
router.get("/", async (req, res) => {
  res.send("it's backend api!");
});

module.exports = router;
