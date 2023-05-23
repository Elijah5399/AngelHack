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
        if (!result || !result[0]) {
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
            return cb(null, result[0]);
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
  if (!req.session.messages) {
    res.locals.hasFailed = false;
  } else {
    res.locals.hasFailed = true;
  }
  if (!req.user) {
    res.render("login");
  } else {
    res.locals.user = req.user;
    res.redirect("/");
  }
});

router.post("/logout", function (req, res, next) {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect("/login");
  });
});

router.get("/registration", function (req, res, next) {
  if (req.user) {
    res.locals.user = req.user;
    res.render("index");
  } else if (req.dupUser) {
    res.render("registration", { dupUser: true });
  } else {
    res.render("registration", { dupUser: false });
  }
});

//redirects a person to the home page if their password is correct, and brings them back
//to the login page if their password is wrong.
router.post(
  "/login/password",
  passport.authenticate("local", {
    failureRedirect: "/login",
    failureMessage: true,
  }),
  //if authentication succeeds, passport.authenticate() middleware calls the next function in the stack.
  //we now want to redirect them to index page with their username stored!
  //here the req has all the sql table values for that row

  function (req, res) {
    res.redirect("/");
  }
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
            console.log(err);
            if (err.code && err.code === "ER_DUP_ENTRY") {
              res.render("registration", { dupUser: true });
              return;
            } else {
              return next(err);
            }
          }
          var user = {
            id: results.id,
            username: req.body.username,
          };
          req.login(user, function (err) {
            if (err) {
              return next(err);
            } else {
              //res.locals.user = user;
              res.redirect("/");
            }
          });
        }
      );
    }
  );
});

router.all("*", function (req, res, next) {
  res.render("error404");
});

module.exports = connection;
module.exports = router;
