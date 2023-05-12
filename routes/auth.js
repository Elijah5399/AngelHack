var express = require("express");
var passport = require("passport");
var LocalStrategy = require("passport-local");
var session = require("express-session");
var crypto = require("crypto");
var router = express.Router();
const mysql = require("mysql2");

//here we use the environment variables declared in the .env files to establish a connection to the SQL database
const options = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_DATABASE,
};

const connection = mysql.createConnection(options); // or mysql.createPool(options);

connection.connect(function (err) {
  if (err) {
    console.error("Error connecting: " + err.stack);
    return;
  }
  console.log("Connected as thread id: " + connection.threadId);
});

//declare the strategy that we use for authentication
passport.use(
  new LocalStrategy(function verify(username, password, cb) {
    connection.query(
      process.env.SQL_FOR_OBTAINING_USER,
      [username],
      function (err, result) {
        if (err) {
          return cb(err);
        }
        if (!result) {
          return cb(null, false, {
            message: "Incorrect username or password.",
          });
        }
        crypto.pbkdf2(
          password,
          result[0].salt,
          310000,
          32,
          "sha256",
          function (err, hashedPassword) {
            if (err) {
              return cb(err);
            }
            if (
              !crypto.timingSafeEqual(result[0].hashed_password, hashedPassword)
            ) {
              return cb(null, false, {
                message: "Incorrect username or password.",
              });
            }
            return cb(null, result);
          }
        );
      }
    );
  })
);
passport.serializeUser(function (user, cb) {
  process.nextTick(function () {
    cb(null, { id: user.id, username: user.username });
  });
});

passport.deserializeUser(function (user, cb) {
  process.nextTick(function () {
    return cb(null, user);
  });
});

router.get("/login", function (req, res, next) {
  res.render("login");
});

router.get("/registration", function (req, res, next) {
  res.render("registration");
});

//redirects a person to the home page if their password is correct, and brings them back
//to the login page if their password is wrong.
router.post(
  "/login/password",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
  })
);

//this function handles registration of new users
router.post("/registration", function (req, res, next) {
  var salt = crypto.randomBytes(16);
  crypto.pbkdf2(
    req.body.password,
    salt,
    310000,
    32,
    "sha256",
    function (err, hashedPassword) {
      if (err) {
        return next(err);
      }
      connection.query(
        process.env.SQL_FOR_INSERTING_USER,
        [req.body.username, hashedPassword, salt],
        function (err, results) {
          if (err) {
            return next(err);
          }
          var user = {
            id: results.id,
            username: req.body.username,
          };
          //TODO: address the issue of login not working as session is not used :(
          req.login(user, function (err) {
            if (err) {
              return next(err);
            }
            res.redirect("/");
          });
        }
      );
    }
  );
});
module.exports = connection;
module.exports = router;
