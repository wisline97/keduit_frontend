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
    res.render("_0400_main_total.ejs");
});

// radio 태그 페이지
app.get("/radioTest", function(req,res){
    res.render("_0401_radioTest.ejs");
});

app.get("/radioTestPro", function(req,res){
    var renderData = {
        grade: req.query.grade,
    };
    res.render("_0401_radioTestPro.ejs", renderData);
});

// select 태그 페이시
app.get("/selectTest", function(req,res){
    res.render("_0402_selectTest.ejs");
});

app.get("/selectTestPro", function(req,res){
    var renderData = {
        subject: req.query.subject,
    };
    res.render("_0402_selectTestPro.ejs", renderData);
});

// check box 태그 페이지
app.get("/checkboxTest", function(req, res){
    res.render("_0403_checkboxTest.ejs");
});

app.get("/checkboxTestPro", function(req, res){
    var renderData = {
        hobbies: req.query.hobbies,
    };
    res.render("_0403_checkboxTestPro.ejs", renderData);
});

//textarea 태그 페이지
app.get("/textareaTest", function(req,res){
    res.render("_0404_textareaTest.ejs");
});

app.get("/textareaTestPro", function(req,res){
    var renderData = {
        memo: req.query.memo,
    };
    res.render("_0404_textareaTestPro.ejs", renderData);
});

// 종합 폼 페이지
app.get("/totalFormTest", function(req,res){
    res.render("_0405_totalFormTest.ejs");
});

app.get("/totalFormTestPro", function(req,res){
    var renderData = {
        num: req.query.num,
        name: req.query.name,
        grade: req.query.grade,
        subject: req.query.subject,
        hobbies: req.query.hobbies,
        memo: req.query.memo,
    };
    res.render("_0405_totalFormTestPro.ejs",renderData);
});
