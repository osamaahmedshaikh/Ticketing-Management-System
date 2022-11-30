var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "osamashaikh",
    password: "osamashaikh123",
    database: "mydb"
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "CREATE TABLE clientticket (reqid VARCHAR(255), firstname VARCHAR(255) , lastname VARCHAR(255), template VARCHAR(255) , subject VARCHAR(255) , res VARCHAR(255))";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Table created");
    });
});

