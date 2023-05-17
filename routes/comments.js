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
    req.body.postDist,
    null,
    req.body.commentContent,
    req.body.dateTime,
    0,
    req.body.userPosted,
  ]);

  //on posting a comment, user is redirected to main page ??
  res.render("index", { user: req.user });
});

module.exports = router;

/* 
Post format in req.body:
[Object: null prototype] {
  commentContent: 'awr',
  postDist: '0',
  dateTime: '2023-05-17 14:07:03',
  userPosted: 'Urmama'
}
*/
