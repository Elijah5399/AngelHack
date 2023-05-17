var express = require("express");
var getCommentsWrapper = require("./comments");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.locals.getCommentsWrapper = getCommentsWrapper;

  if (!req.user) {
    res.locals.user = null;
    res.render("index");
  } else {
    //this is necessary to define user in index.ejs!!!!
    res.locals.user = req.user;
    res.render("index");
  }
});

router.get("/topic1", function (req, res, next) {
  res.locals.comments = getComments(1);
  if (!req.user) {
    res.locals.user = null;
    res.render("topic1");
  } else {
    //this is necessary to define user in index.ejs!!!!
    res.locals.user = req.user;
    res.render("topic1");
  }
});

router.get("/topic2", function (req, res, next) {
  res.locals.comments = getComments(2);
  if (!req.user) {
    res.locals.user = null;
    res.render("topic2");
  } else {
    //this is necessary to define user in index.ejs!!!!
    res.locals.user = req.user;
    res.render("topic2");
  }
});

router.get("/topic3", function (req, res, next) {
  res.locals.comments = getComments(3);
  if (!req.user) {
    res.locals.user = null;
    res.render("topic3");
  } else {
    //this is necessary to define user in index.ejs!!!!
    res.locals.user = req.user;
    res.render("topic3");
  }
});

module.exports = router;
