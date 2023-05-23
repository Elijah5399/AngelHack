var express = require("express");
const mysql = require("mysql2");

//here we use the environment variables declared in the .env files to establish a connection to the SQL database

const options = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_DATABASE2,
};

const commentsConnection = mysql.createConnection(options);

commentsConnection.connect(function (err) {
  if (err) {
    console.error("Error connecting: " + err.stack);
    return;
  }
  console.log("Connected to the commentsLikes database!");
});

module.exports = commentsConnection;
