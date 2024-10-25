// /db/connection.js
var mysql = require('mysql');
require('dotenv').config();

var con = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE
});

con.connect(function(err) {
  if (err) {
    console.error('Error connecting to the database: ', err);
    return;
  }
  console.log("Connected to the database!");
});

module.exports = con;
