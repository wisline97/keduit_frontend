//서버 세팅
var express = require("express")
var app = express();
var port = 3301;
var server = app .listen(port,function(){
    console.log("서버 가동 성공" + port);
});

//ejs 세팅(views)
var ejs = require("ejs");
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.engine("ejs",ejs.renderFile);

//session 세팅
var session = require("express-session");
app.use(session({
    secret:"abcdefg",
    resave: false,
    saveUninitialized : false,
}));

//라우터 기본 메인 페이지 세팅
app.get("/", function(req,res){
    scoreDB = [65, 45, 88];
    req.session.scoreDB = scoreDB;
    res.redirect("scoreListAll")
});

app.get("/scoreListAll", function(req,res){
    var renderData = {
        "scoreDB": req.session.scoreDB,
    }
    res.render("0101_scoreListAll.ejs", renderData);
});

//개별 삭제 기능
app.get("/del", function(req, res){
    var index = req.query.index;
    var scoreDB = req.session.scoreDB;
    scoreDB.splice(index, 1);

    req.session.scoreDB = scoreDB;
    res.redirect("scoreListAll")
});

//전체 삭제 기능
app.get("/delAll", function(req, res){
    var scoreDB = req.session.scoreDB;
    scoreDB = []
    req.session.scoreDB = scoreDB;
    res.redirect("scoreListAll");
})


//랜덤 값 추가 기능
app.get("/addScore", function(req,res){
    var scoreDB = req.session.scoreDB;
    var ran = parseInt(Math.random()*100) + 1;
    scoreDB.push(ran);
    req.session.scoreDB = scoreDB;
    res.redirect("scoreListAll")
})

//합격생만 출력 기능
app.get("/passOnly", function(req,res){
    var renderData = {
        "scoreDB": req.session.scoreDB,
    };
    res.render("0102_passOnly.ejs", renderData);
});


//점수 수정 페이지
app.get("/updateForm", function(req,res){
    var index = req.query.index;
    var renderData = {
        "scoreDB": req.session.scoreDB,
        "index": index,
    };
    res.render("0103_updateForm.ejs", renderData);
});

//점수 수정 기능
app.get("/update", function(req,res){
    var updateValue = req.query.updateValue;
    var index = req.query.index;
    var scoreDB = req.session.scoreDB;
    
    scoreDB[index] = updateValue;

    req.session.scoreDB = scoreDB;
    res.redirect("scoreListAll");
});