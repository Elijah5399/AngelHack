var express = require("express");
var commentsConnection = require("./comments");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  const sortingMethod = req.query.sort;
  var appendedSQL = '';
  if (!sortingMethod) {
    //undefined sorting method; do nothing
  } else if (sortingMethod == "newest") {
    appendedSQL = " ORDER BY time_posted DESC"
  } else if (sortingMethod == "oldest") {
    appendedSQL = " ORDER BY time_posted"
  } else if (sortingMethod == "mostlikes") {
    appendedSQL = " ORDER BY likes DESC"
  } else if (sortingMethod == "fewestlikes") {
    appendedSQL = " ORDER BY likes"
  }

  if (!req.user) {
    commentsConnection.query(
      process.env.SQL_FOR_RETRIEVING_COMMENTS + appendedSQL,
      [0],
      function (err, results) {
        if (err) {
          console.log("error getting comments: " + err.stack);
        }
        //if the user is not logged in then they haven't liked anything
        res.render("index", { user: null, comments: results, likedComments: null, sortingMethod : sortingMethod });
      }
    );
  } else {
    commentsConnection.query(
      process.env.SQL_FOR_RETRIEVING_COMMENTS + appendedSQL,
      [0],
      function (err, results) {
        if (err) {
          console.log("error getting comments: " + err.stack);
        }
        commentsConnection.query(
          process.env.SQL_FOR_CHECKING_LIKES_2,
          [0, req.user.username],
          function (error, likedComments) {
            if (error) {
              console.log("error when checking likes: " + error.stack);
            } else {
              res.render("index", { user : req.user, comments : results, likedComments : likedComments, sortingMethod : sortingMethod });
            }
          }
        )
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

//function to handle the liking of ANY post in homepage
router.post("/likeComment", function (req, res, next) {
  commentsConnection.query(
    //check if the user has already liked the comment
    process.env.SQL_FOR_CHECKING_LIKES,
    [req.body.comment_id, req.body.username],
    function (err, results) {
      if (err) {
        console.log("error in verifying likes: " + err.stack);
        return;
      }
      //if there is no error
      if (results.length != 0) {
        //they have liked the post before
        //remove their likes from the likes table
        commentsConnection.query(process.env.SQL_FOR_DELETING_LIKES, [
          req.body.comment_id,
          req.body.username,
        ]);
        //increment the comment's likes in the comments table
        commentsConnection.query(process.env.SQL_FOR_DELETING_LIKES_FROM_POST, [
          req.body.comment_id,
        ]);
      } else {
        //they have not liked the post before
        //add their likes into the likes table
        commentsConnection.query(process.env.SQL_FOR_ADDING_LIKES, [
          req.body.comment_id,
          req.body.username,
          req.body.post_id,
        ]);
        //decrement the likes count in the comments table
        commentsConnection.query(process.env.SQL_FOR_ADDING_LIKES_TO_POST, [
          req.body.comment_id,
        ]);
      }
    }
  );
  res.redirect("/");
});

//function to handle the liking of ANY post in topic1
router.post("/topic1/likeComment", function (req, res, next) {
  commentsConnection.query(
    //check if the user has already liked the comment
    process.env.SQL_FOR_CHECKING_LIKES,
    [req.body.comment_id, req.body.username],
    function (err, results) {
      if (err) {
        console.log("error in verifying likes: " + err.stack);
        return;
      }
      //if there is no error
      if (results.length != 0) {
        //they have liked the post before
        //remove their likes from the likes table
        commentsConnection.query(process.env.SQL_FOR_DELETING_LIKES, [
          req.body.comment_id,
          req.body.username,
        ]);
        //increment the comment's likes in the comments table
        commentsConnection.query(process.env.SQL_FOR_DELETING_LIKES_FROM_POST, [
          req.body.comment_id,
        ]);
      } else {
        //they have not liked the post before
        //add their likes into the likes table
        commentsConnection.query(process.env.SQL_FOR_ADDING_LIKES, [
          req.body.comment_id,
          req.body.username,
          req.body.post_id,
        ]);
        //decrement the likes count in the comments table
        commentsConnection.query(process.env.SQL_FOR_ADDING_LIKES_TO_POST, [
          req.body.comment_id,
        ]);
      }
    }
  );
  res.redirect("/topic1");
});

//function to handle the liking of ANY post in homepage
router.post("/topic2/likeComment", function (req, res, next) {
  commentsConnection.query(
    //check if the user has already liked the comment
    process.env.SQL_FOR_CHECKING_LIKES,
    [req.body.comment_id, req.body.username],
    function (err, results) {
      if (err) {
        console.log("error in verifying likes: " + err.stack);
        return;
      }
      //if there is no error
      if (results.length != 0) {
        //they have liked the post before
        //remove their likes from the likes table
        commentsConnection.query(process.env.SQL_FOR_DELETING_LIKES, [
          req.body.comment_id,
          req.body.username,
        ]);
        //increment the comment's likes in the comments table
        commentsConnection.query(process.env.SQL_FOR_DELETING_LIKES_FROM_POST, [
          req.body.comment_id,
        ]);
      } else {
        //they have not liked the post before
        //add their likes into the likes table
        commentsConnection.query(process.env.SQL_FOR_ADDING_LIKES, [
          req.body.comment_id,
          req.body.username,
          req.body.post_id,
        ]);
        //decrement the likes count in the comments table
        commentsConnection.query(process.env.SQL_FOR_ADDING_LIKES_TO_POST, [
          req.body.comment_id,
        ]);
      }
    }
  );
  res.redirect("/topic2");
});

//function to handle the liking of ANY post in homepage
router.post("/topic3/likeComment", function (req, res, next) {
  commentsConnection.query(
    //check if the user has already liked the comment
    process.env.SQL_FOR_CHECKING_LIKES,
    [req.body.comment_id, req.body.username],
    function (err, results) {
      if (err) {
        console.log("error in verifying likes: " + err.stack);
        return;
      }
      //if there is no error
      if (results.length != 0) {
        //they have liked the post before
        //remove their likes from the likes table
        commentsConnection.query(process.env.SQL_FOR_DELETING_LIKES, [
          req.body.comment_id,
          req.body.username,
        ]);
        //increment the comment's likes in the comments table
        commentsConnection.query(process.env.SQL_FOR_DELETING_LIKES_FROM_POST, [
          req.body.comment_id,
        ]);
      } else {
        //they have not liked the post before
        //add their likes into the likes table
        commentsConnection.query(process.env.SQL_FOR_ADDING_LIKES, [
          req.body.comment_id,
          req.body.username,
          req.body.post_id,
        ]);
        //decrement the likes count in the comments table
        commentsConnection.query(process.env.SQL_FOR_ADDING_LIKES_TO_POST, [
          req.body.comment_id,
        ]);
      }
    }
  );
  res.redirect("/topic3");
});

module.exports = router;
