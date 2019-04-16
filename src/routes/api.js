const express = require("express");
const router = express.Router();
const shell = require("shelljs");

router.post("/build-apk", (req, res, next) => {
  const devKey = req.body["devKey"];
  const packageName = req.body["packageName"];
  console.log(`dev key: ${devKey}\tpackage name: ${packageName}`);

  shell.exec("./src/script/script.sh");
});

module.exports = router;
