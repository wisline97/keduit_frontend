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
    res.render("_0300_main_url.ejs");
});

//aTagTest 페이지
app.get("/aTagTest", function(req, res){
    res.render("_0301_aTagTest.ejs");
});
app.get("/aTagTest1", function(req, res){
    var renderData = {
        x: req.query.x,
        y: req.query.y,
        z: req.query.z,
    }
    res.render("_0301_aTagTest1Pro.ejs", renderData);
});
app.get("/aTagTest2", function(req, res){
    var renderData = {
        x: req.query.x,
        y: req.query.y,
        z: req.query.z,
    }
    res.render("_0301_aTagTest2Pro.ejs", renderData);
});

// 야바위게임 페이지

app.get("/quizSelect", function(req, res){
    res.render("_0302_quizSelect.ejs");
});

app.get("/quizSelectPro", function(req, res){
    var renderData = {
        ran: req.query.ran,
        select:req.query.select,
    };
    res.render("_0302_quizSelectPro.ejs", renderData);
});

// 연산자 게임 페이지

app.get("/quizOperator", function(req,res){
    res.render("_0303_quizOperator.ejs");
});
app.get("/quizOperatorPro", function(req,res){
    var renderData = {
        select: req.query.select,
        num1: req.query.num1,
        num2: req.query.num2,
        op: req.query.op,
        result: req.query.result,
    }
    res.render("_0303_quizOperatorPro.ejs", renderData);
});