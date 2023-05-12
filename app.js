require("dotenv").config();
var createError = require("http-errors");
var express = require("express");
var path = require("path");
var logger = require("morgan");
var indexRouter = require("./routes/index");
var authRouter = require("./routes/auth");
var session = require("express-session");
var passport = require("passport");
var app = express();
var cookieParser = require("cookie-parser");
const connection = require("./routes/auth");

app.locals.pluealize = require("pluralize");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(logger("dev"));
//these help us to parse incoming data from form submission
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//this helps us to show the html and css properly
app.use(express.static(path.join(__dirname, "views")));

//establish linkage with index.js and auth.js so their .get and .post methods can be used
app.use("/", indexRouter);
app.use("/", authRouter);

app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.authenticate("session"));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
