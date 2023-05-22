var express = require("express");
const mysql = require("mysql2");

//here we use the environment variables declared in the .env files to establish a connection to the SQL database
//development code

const options = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_DATABASE2,
};

//production code
/*
let options = {
  user: process.env.DB_USER,
  database: process.env.DB_DATABASE2,
  password: process.env.DB_PASS,
};

if (process.env.NODE_ENV === "production") {
  options.socketPath = `/cloudsql/${process.env.INSTANCE_CONNECTION_NAME}`;
}
*/

const commentsConnection = mysql.createConnection(options);

commentsConnection.connect(function (err) {
  if (err) {
    console.error("Error connecting: " + err.stack);
    return;
  }
  console.log("Connected to the commentsLikes database!");
});

module.exports = commentsConnection;
