
var mysql = require('mysql');

  module.exports=  mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    insecureAuth : true,
    database: "gp"
  })
  
  
