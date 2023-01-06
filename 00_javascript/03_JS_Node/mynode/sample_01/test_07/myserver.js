var express = require("express");
var app = express();
var port = 1234;
var server = function(){
    console.log(`${port} th server is working`);
}
//server works
app.listen(port, server());

//ejs setting
var ejs = require("ejs");
app.set("view engine", "ejs");
app.set("views", __dirname+"/views");

require("./router/index")(app);
require("./router/99dan")(app);