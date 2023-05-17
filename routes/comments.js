var express = require("express");

var router = express.Router();
const mysql = require("mysql2");

//here we use the environment variables declared in the .env files to establish a connection to the SQL database
const options = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_DATABASE2,
};

const connection = mysql.createConnection(options);

connection.connect(function (err) {
  if (err) {
    console.error("Error connecting: " + err.stack);
    return;
  }
  console.log("Connected to the commentsLikes database!");
});
router.post("/postComment", function (req, res, next) {
  //Use an SQL query to insert the comment into the DB
  connection.query(process.env.SQL_FOR_INSERTING_COMMENT, [
    0,
    null,
    req.body.commentContent,
    req.body.dateTime,
    0,
    req.body.userPosted,
  ]);

  //on posting a comment, user is redirected to main page ??
  res.render("topic1", { user: req.user });
});
router.post("/topic1/postComment", function (req, res, next) {
  //Use an SQL query to insert the comment into the DB
  connection.query(process.env.SQL_FOR_INSERTING_COMMENT, [
    1,
    null,
    req.body.commentContent,
    req.body.dateTime,
    0,
    req.body.userPosted,
  ]);

  //on posting a comment, user is redirected to main page ??
  res.render("topic1", { user: req.user });
});

router.post("/topic2/postComment", function (req, res, next) {
  //Use an SQL query to insert the comment into the DB
  connection.query(process.env.SQL_FOR_INSERTING_COMMENT, [
    2,
    null,
    req.body.commentContent,
    req.body.dateTime,
    0,
    req.body.userPosted,
  ]);

  //on posting a comment, user is redirected to main page ??
  res.render("topic2", { user: req.user });
});

router.post("/topic3/postComment", function (req, res, next) {
  //Use an SQL query to insert the comment into the DB
  connection.query(process.env.SQL_FOR_INSERTING_COMMENT, [
    3,
    null,
    req.body.commentContent,
    req.body.dateTime,
    0,
    req.body.userPosted,
  ]);

  //on posting a comment, user is redirected to main page ??
  res.render("topic3", { user: req.user });
});

async function getComments(postID) {
  const comments = null;
  connection.query(
    process.env.SQL_FOR_RETRIEVING_COMMENTS,
    [postID.toString()],
    function (err, results) {
      if (err) {
        console.log("error getting comments: " + err.stack);
      }
      comments = results;
      //Line B
      //successCallback(results);
    }
  );
  //Line A
}

/*
function getCommentsWrapper(postID) {
  return new Promise((resolve, reject) => {
    getComments(
      postID,
      (successResponse) => {
        resolve(successResponse);
      },
      (errorResponse) => {
        reject(errorResponse);
      }
    );
  });
}
*/

module.exports = router;
module.exports = getCommentsWrapper;

/* 
Post format in req.body:
[Object: null prototype] {
  commentContent: 'awr',
  postDist: '0',
  dateTime: '2023-05-17 14:07:03',
  userPosted: 'Urmama'
}
*/
