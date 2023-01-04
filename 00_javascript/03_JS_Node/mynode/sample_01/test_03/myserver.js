//서버세팅
var express = require("express");
var app = express();
var port = 80;

var server = app.listen(port, function () {
  console.log("서버 가동중 포트번호는:" + port);
});

//ejs 세팅
var ejs = require("ejs");
app.set("views", __dirname); // 경로설정
app.set("view engine", "ejs"); // ejs세팅1
app.engine("ejs", ejs.renderFile); // ejs세팅2

// 라우터 세팅
// res.render 하나당 ejs파일을 하나씩 추가한다.
app.get("/", function (req, res) {
  res.render("main.ejs"); // res.render => ejs 파일을 출력한다.
});

app.get("/test03", function (req, res) {
  res.render("test03.ejs"); // res.render => ejs 파일을 출력한다.
});
