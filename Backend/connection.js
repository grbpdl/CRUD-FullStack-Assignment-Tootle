var mysql = require('mysql');

var con = mysql.createConnection({
  host: "sql12.freemysqlhosting.net",
  user: "sql12740574",
  password: "CktFNmUKCd",
  database: "sql12740574"
});




con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});