var express = require("express");
var app = express();
var port = 1234;
var server = app.listen(port, function () {
  console.log(`${port} 번  서버 가동`);
});

var ejs = require("ejs");
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

app.use(express.static("./img"));

var session = require("express-session");
app.use(
  session({
    secret: "abcdefg",
    resave: false,
    saveUninitialized: false,
  })
);

require("./router/memberController")(app);
// require("./router/memberTestController")(app);
// require("./router/gameController")(app);

app.get("/", function (req, res) {
  res.render("main.ejs");
});
