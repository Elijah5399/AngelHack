require("dotenv").config();
var createError = require("http-errors");
var express = require("express");
var path = require("path");
var logger = require("morgan");
var indexRouter = require("./routes/index");
var authRouter = require("./routes/auth");
var commentsRouter = require("./routes/comments");
var session = require("express-session");
const mysql = require("mysql2");
var passport = require("passport");
var app = express();
var cookieParser = require("cookie-parser");
const connection = require("./routes/auth");
const MySQLStore = require("express-mysql-session")(session);

//development code

const options = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_DATABASE,
};

/* production code */
/*
let options = {
  user: process.env.DB_USER,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASS,
};

if (process.env.NODE_ENV === "production") {
  options.socketPath = `/cloudsql/${process.env.INSTANCE_CONNECTION_NAME}`;
}
*/

//prod code 2nd try
/*
const mysql = require("promise-mysql");

// createUnixSocketPool initializes a Unix socket connection pool for
// a Cloud SQL instance of MySQL.
const createUnixSocketPool = async (config) => {
  // Note: Saving credentials in environment variables is convenient, but not
  // secure - consider a more secure solution such as
  // Cloud Secret Manager (https://cloud.google.com/secret-manager) to help
  // keep secrets safe.
  return mysql.createPool({
    user: process.env.DB_USER, // e.g. 'my-db-user'
    password: process.env.DB_PASS, // e.g. 'my-db-password'
    database: process.env.DB_DATABASE, // e.g. 'my-database' 
    socketPath: process.env.INSTANCE_CONNECTION_NAME, // e.g. '/cloudsql/project:region:instance'
    // Specify additional properties here.
    //...config,
  });
};
*/

const sessionStore = new MySQLStore(options);

app.locals.pluralize = require("pluralize");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(logger("dev"));
//these help us to parse incoming data from form submission
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//this helps us to show the html and css properly
app.use(express.static(path.join(__dirname, "views")));

app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
    store: sessionStore,
  })
);

// Optionally use onReady() to get a promise that resolves when store is ready.

sessionStore
  .onReady()
  .then(() => {
    // MySQL session store ready for use.
    console.log("MySQLStore ready");
  })
  .catch((error) => {
    console.log("Problem here");
    // Something went wrong.
    console.log(error.stack);
  });

app.use(passport.authenticate("session"));
//establish linkage with index.js and auth.js so their .get and .post methods can be used
app.use("/", indexRouter);
app.use("/", authRouter);

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
