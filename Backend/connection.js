var mysql = require('mysql');
require('dotenv').config()
var con = mysql.createConnection({
  host:  process.env.HOST,
  user:  process.env.USER,
  password:  process.env.PASSWORD,
  database: process.env.DATABASE
});




con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
//   var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("Table created");
//   });
});