//서버세팅
var express = require("express");
var app = express();
var port = 80;

var server = app.listen(port, function () {
  console.log("서버 가동중 포트번호는:" + port);
});

//ejs 세팅
var ejs = require("ejs");
app.set("views", __dirname + "/views"); // 경로설정
app.set("view engine", "ejs"); // ejs세팅1
app.engine("ejs", ejs.renderFile); // ejs세팅2

// 라우터 세팅
// res.render 하나당 ejs파일을 하나씩 추가한다.
app.get("/", function (req, res) {
  res.render("0200_main_while.ejs"); // res.render => ejs 파일을 출력한다.
});

app.get("/while0201", function (req, res) {
  res.render("0201_while_test.ejs"); // res.render => ejs 파일을 출력한다.
});

app.get("/while0201Pro", function (req, res) {
  res.render("0201_while_testPro.ejs"); // res.render => ejs 파일을 출력한다.
});

app.get("/while0202", function (req, res) {
  res.render("0202_while_test.ejs"); // res.render => ejs 파일을 출력한다.
});

app.get("/while0202Pro", function (req, res) {
  res.render("0202_while_testPro.ejs"); // res.render => ejs 파일을 출력한다.
});

app.get("/while0203", function (req, res) {
  res.render("0203_while_test.ejs"); // res.render => ejs 파일을 출력한다.
});

app.get("/while0203Pro", function (req, res) {
  res.render("0203_while_testPro.ejs"); // res.render => ejs 파일을 출력한다.
});
