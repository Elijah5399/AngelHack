var express = require("express");

var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  if (!req.user) {
    res.locals.user = null;
    res.render("index");
  } else {
    //this is necessary to define user in index.ejs!!!!
    res.locals.user = req.user;
    res.render("index");
  }
});

module.exports = router;
