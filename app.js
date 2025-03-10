var express = require('express');
var app = express();
var router=require('./route/index')
var path=require('path')
var hbs = require('express-handlebars')
var bodyParser = require('body-parser')
var dbs= require('./dataBase/Db')
var data=require('./Data/Data')
var mysql = require('mysql');
const { resolve } = require('path');
const { response } = require('express');
// set up view engine------------------------------------------
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(express.static(path.join(__dirname, 'public')));



// parse application/x-www-form-urlencoded (req.body indefined)
app.use(express.json());
app.use(express.urlencoded());


// server connection establihed------------------------------
app.listen(8000,()=>{
    console.log("connected")

  
})
//SQL CONNECTION SET UP.........................



// route setup ----------------------------c
app.use('/users',router)
app.use('/',router)
