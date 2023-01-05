//server setting
var express = require("express");
var app = express();
var port = 1234;
app.listen(port, function(){
    console.log(`port num ${port} th server is working.`)});

//ejs setting
var ejs = require("ejs");
app.set("view engine", "ejs");
app.set("views", __dirname +"/views");
console.log(__dirname)

//express-session setting
var session = require("express-session");
app.use(session({
    secret: "abcdefg",
    resave: false,
    saveUninitialized: false,
}));

//router folder setting
require("./router/basic")(app);
require("./router/baby")(app);
