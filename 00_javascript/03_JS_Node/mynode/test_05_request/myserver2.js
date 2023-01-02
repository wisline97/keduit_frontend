// 서버 세팅
var express = require("express");
var app = express();
var port = 3201;
var server = app.listen(port, function () {
  console.log("서버가 가동되었습니다" + port);
});

//ejs 세팅(views)

var ejs = require("ejs");
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.engine("ejs", ejs.renderFile);

//라우터 세팅

//메인페이지 -> url에 아무런 정보가 없을 때
app.get("/", function(req,res){
    res.redirect("main");
});

app.get("/main", function(req,res){
    res.render("_0200_main_hidden.ejs");
});

//hiddenTest 페이지
app.get("/hiddenTest", function(req, res){
    res.render("_0201_hiddenTest.ejs");
});

app.get("/hiddenTestPro", function(req, res){
    var renderData = {
        num1: req.query.num1,
        num2: req.query.num2,
        num3: req.query.num3,
    };
    res.render("_0201_hiddenTestPro.ejs", renderData);
});

//upDown page
app.get("/upDown", function(req, res){
    res.render("_0202_quizUpDown.ejs");
});

app.get("/upDownPro", function(req, res){
    var renderData = {
        ran: req.query.ran,
        result: req.query.result,
    };
    res.render("_0202_quizUpDownPro.ejs",renderData);
});

//구구단 페이지
app.get("/quiz99", function(req,res){
    res.render("_0203_quiz99.ejs");
});

app.get("/quiz99Pro", function(req,res){
    var renderData = {
        result: req.query.result,
        num1: req.query.num1,
        num2: req.query.num2,
    }
    res.render("_0203_quiz99Pro.ejs",renderData);
});