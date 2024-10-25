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

  // Create the 'user' table if it doesn't exist
  var createUserTable = `
    CREATE TABLE IF NOT EXISTS user (
      id INT AUTO_INCREMENT PRIMARY KEY,
      username VARCHAR(50) NOT NULL,
      email VARCHAR(100) NOT NULL UNIQUE
    );
  `;
  
  con.query(createUserTable, function(err, result) {
    if (err) throw err;
    console.log("User table checked/created!");
  });
});

module.exports = con;
