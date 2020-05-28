require("dotenv").config();
const mysql = require("mysql");

const con = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
});

//default port 3306

con.connect((err) => {
  if (err) throw err;
  con.query("CREATE DATABASE IF NOT EXISTS user;");
  con.query("USE user;");
  con.query(
    "CREATE TABLE IF NOT EXISTS users(username VARCHAR(30) NOT NULL, firstname VARCHAR(20), lastname VARCHAR(30), email VARCHAR(100), avatar VARCHAR(254), bio VARCHAR(2000), github VARCHAR(100), PRIMARY KEY(username));",
    (err, result, fields) => {
      if (err) throw err;
      console.log(err);
      console.log(result);
    }
  );
});
