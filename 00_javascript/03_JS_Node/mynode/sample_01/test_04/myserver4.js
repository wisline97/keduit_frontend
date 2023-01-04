// 서버 세팅
var express = require("express");
var app = express();
var port = 3103;
var server = app.listen(port, function () {
  console.log("서버가 가동되었습니다" + port);
});

// ejs 세팅(views)
var ejs = require("ejs");
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.engine("ejs", ejs.renderFile);

// 라우터 세팅
app.get("/", function (req, res) {
  res.redirect("main"); // res.redirect() 는 라우터상에서 이동한다.
});

// res.render 하나당 ejs파일을 하나씩 추가한다.
app.get("/main", function (req, res) {
  res.render("0400_main_test.ejs"); // res.render() 는 ejs 파일을 출력한다.
});

app.get("/test01", function (req, res) {
  res.render("0401_test.ejs");
});
app.get("/test01Pro", function (req, res) {
  res.render("0401_testPro.ejs");
});

app.get("/test02", function (req, res) {
  res.render("0402_test.ejs");
});

app.get("/test02Pro", function (req, res) {
  res.render("0402_testPro.ejs");
});

app.get("/test03", function (req, res) {
  res.render("0403_test.ejs");
});

app.get("/test03Pro", function (req, res) {
  res.render("0403_testPro.ejs");
});

app.get("/test04", function (req, res) {
  res.render("0404_test.ejs");
});

app.get("/test04Pro", function (req, res) {
  res.render("0404_testPro.ejs");
});

app.get("/test05", function (req, res) {
  res.render("0405_test.ejs");
});

app.get("/test05Pro", function (req, res) {
  res.render("0405_testPro.ejs");
});

app.get("/test06", function (req, res) {
  res.render("0406_test.ejs");
});

app.get("/test06Pro", function (req, res) {
  res.render("0406_testPro.ejs");
});
