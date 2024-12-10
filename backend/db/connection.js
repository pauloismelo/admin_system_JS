const mysql = require('mysql2');
require('dotenv').config()


const db = mysql.createPool({
    host:"localhost",
   // user:process.env.DB_USER,
   // password:process.env.DB_PASS,
   // database:process.env.DB_DATABASE
   user:"root",
   password:"admin123",
   database:"js_admin"
});


module.exports = db;