// 서버 세팅
var express = require("express");
var app = express();
var port = 3201;
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
  res.redirect("main"); // res.redirect() 는 라우터이동.
});
// res.render 하나당 ejs파일을 하나씩 추가한다.
app.get("/main", function (req, res) {
  res.render("_0100_main_form.ejs"); // res.render() 는 ejs 파일을 출력한다.
});

//--------------------------------------------------------------------------

// 폼 기본
app.get("/formTest", function (req, res) {
  res.render("_0101_formTest.ejs"); // res.render() 는 ejs 파일을 출력한다.
});
app.get("/formTestPro", function (req, res) {
  //console.log(req.query.age)

  // request 에서 입력받은 변수를 저장해서 다음페이지로 이동한다.
  var renderData = {
    age: req.query.age,
  };
  res.render("_0101_formTestPro.ejs", renderData);
});

// 짝수 홀수
app.get("/oddEven", function (req, res) {
  res.render("_0102_oddEven.ejs");
});

app.get("/oddEvenPro", function (req, res) {
  //console.log(req.query.number)
  var renderData = {
    number: req.query.number,
  };
  res.render("_0102_oddEvenPro.ejs", renderData);
});

// 숫자 비교
app.get("/compareNumber", function (req, res) {
  res.render("_0103_compareNumber.ejs");
});

app.get("/compareNumberPro", function (req, res) {
  //console.log(req.query.num1)
  //console.log(req.query.num2)
  var renderData = {
    num1: req.query.num1,
    num2: req.query.num2,
  };
  res.render("_0103_compareNumberPro.ejs", renderData);
});

// 합격
app.get("/passornot", function (req, res) {
  res.render("_0104_score.ejs");
});

app.get("/passornotPro", function (req, res) {
  //console.log(req.query.num1)
  //console.log(req.query.num2)
  var renderData = {
    score1: req.query.score1,
    score2: req.query.score2,
  };
  res.render("_0104_scorePro.ejs", renderData);
});

//가장 큰 수
app.get("/maxNumber", function(req, res){
  res.render("_0105_maxNumber.ejs");
});

app.get("/maxNumberPro", function(req, res){

  var renderData = {
    num1: req.query.num1,
    num2: req.query.num2,
    num3: req.query.num3,
  };

  res.render("_0105_maxNumberPro.ejs", renderData);

});