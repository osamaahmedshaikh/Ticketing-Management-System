var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "osamashaikh",
  password: "Os@ma1995"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("CREATE DATABASE mydb", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });
});