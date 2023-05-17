var express = require("express");

var router = express.Router();

router.post("/postComment", function (req, res, next) {
  console.log(req.body);
});

router.get("/testing", function (req, res, next) {
  res.send("sup bro");
});

module.exports = router;
