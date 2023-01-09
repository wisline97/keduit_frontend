module.exports = function(app){
    app.get("/99danMain", function(req, res){
        res.render("99dan/99danMain.ejs")
    });

    app.get("/99danPlay", function(req, res){
        var renderData = {
            "score" : req.query.score,
            "gameCount": req.query.gameCount,
        }
        res.render("99dan/99danPlay.ejs", renderData)
    });

    app.get("/99danPro", function(req, res){
        var renderData = {
            "score" : req.query.score,
            "gameCount": req.query.gameCount,
            "x": req.query.x,
            "y": req.query.y,
            "answer": req.query.answer,
        }
        res.render("99dan/99danPro.ejs", renderData)
    })

    
}