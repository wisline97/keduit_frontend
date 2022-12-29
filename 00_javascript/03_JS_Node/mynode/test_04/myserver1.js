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
  res.render("0100_main_if.ejs"); // res.render => ejs 파일을 출력한다.
});

app.get("/if0101", function (req, res) {
  res.render("0101_if_test.ejs"); // res.render => ejs 파일을 출력한다.
});

app.get("/if0101Pro", function (req, res) {
  res.render("0101_if_testPro.ejs"); // res.render => ejs 파일을 출력한다.
});

app.get("/if0102", function (req, res) {
  res.render("0102_if_test.ejs"); // res.render => ejs 파일을 출력한다.
});

app.get("/if0102Pro", function (req, res) {
  res.render("0102_if_testPro.ejs"); // res.render => ejs 파일을 출력한다.
});

app.get("/if0103", function (req, res) {
  res.render("0103_if_test.ejs"); // res.render => ejs 파일을 출력한다.
});

app.get("/if0103Pro", function (req, res) {
  res.render("0103_if_testPro.ejs"); // res.render => ejs 파일을 출력한다.
});
