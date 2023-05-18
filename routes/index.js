var express = require("express");
var commentsConnection = require("./comments");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  if (!req.user) {
    commentsConnection.query(
      process.env.SQL_FOR_RETRIEVING_COMMENTS,
      [0],
      function (err, results) {
        if (err) {
          console.log("error getting comments: " + err.stack);
        }
        res.render("index", { user: null, comments: results });
      }
    );
  } else {
    commentsConnection.query(
      process.env.SQL_FOR_RETRIEVING_COMMENTS,
      [0],
      function (err, results) {
        if (err) {
          console.log("error getting comments: " + err.stack);
        }
        res.render("index", { user: req.user, comments: results });
      }
    );
  }
});

router.get("/topic1", function (req, res, next) {
  if (!req.user) {
    commentsConnection.query(
      process.env.SQL_FOR_RETRIEVING_COMMENTS,
      [1],
      function (err, results) {
        if (err) {
          console.log("error getting comments: " + err.stack);
        }
        res.render("topic1", { user: null, comments: results });
      }
    );
  } else {
    commentsConnection.query(
      process.env.SQL_FOR_RETRIEVING_COMMENTS,
      [1],
      function (err, results) {
        if (err) {
          console.log("error getting comments: " + err.stack);
        }
        res.render("topic1", { user: req.user, comments: results });
      }
    );
  }
});

router.get("/topic2", function (req, res, next) {
  if (!req.user) {
    commentsConnection.query(
      process.env.SQL_FOR_RETRIEVING_COMMENTS,
      [2],
      function (err, results) {
        if (err) {
          console.log("error getting comments: " + err.stack);
        }
        res.render("topic2", { user: null, comments: results });
      }
    );
  } else {
    commentsConnection.query(
      process.env.SQL_FOR_RETRIEVING_COMMENTS,
      [2],
      function (err, results) {
        if (err) {
          console.log("error getting comments: " + err.stack);
        }
        res.render("topic2", { user: req.user, comments: results });
      }
    );
  }
});

router.get("/topic3", function (req, res, next) {
  if (!req.user) {
    commentsConnection.query(
      process.env.SQL_FOR_RETRIEVING_COMMENTS,
      [3],
      function (err, results) {
        if (err) {
          console.log("error getting comments: " + err.stack);
        }
        res.render("topic3", { user: null, comments: results });
      }
    );
  } else {
    commentsConnection.query(
      process.env.SQL_FOR_RETRIEVING_COMMENTS,
      [3],
      function (err, results) {
        if (err) {
          console.log("error getting comments: " + err.stack);
        }
        res.render("topic3", { user: req.user, comments: results });
      }
    );
  }
});

router.post("/postComment", function (req, res, next) {
  //Use an SQL query to insert the comment into the DB
  commentsConnection.query(process.env.SQL_FOR_INSERTING_COMMENT, [
    0,
    null,
    req.body.commentContent,
    req.body.dateTime,
    0,
    req.body.userPosted,
  ]);

  //on posting comment, user is rediected to the home page
  res.redirect("/");
});
router.post("/topic1/postComment", function (req, res, next) {
  //Use an SQL query to insert the comment into the DB
  commentsConnection.query(process.env.SQL_FOR_INSERTING_COMMENT, [
    1,
    null,
    req.body.commentContent,
    req.body.dateTime,
    0,
    req.body.userPosted,
  ]);

  //on posting a comment, user is redirected back to topic 1
  res.redirect("/topic1");
});

router.post("/topic2/postComment", function (req, res, next) {
  //Use an SQL query to insert the comment into the DB
  commentsConnection.query(process.env.SQL_FOR_INSERTING_COMMENT, [
    2,
    null,
    req.body.commentContent,
    req.body.dateTime,
    0,
    req.body.userPosted,
  ]);

  //on posting a comment, user is redirected back to topic2
  res.redirect("/topic2");
});

router.post("/topic3/postComment", function (req, res, next) {
  //Use an SQL query to insert the comment into the DB
  commentsConnection.query(process.env.SQL_FOR_INSERTING_COMMENT, [
    3,
    null,
    req.body.commentContent,
    req.body.dateTime,
    0,
    req.body.userPosted,
  ]);

  //on posting a comment, user is redirected back to topic3
  res.redirect("/topic3");
});

module.exports = router;
