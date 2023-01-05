module.exports = function(app){
    app.get("/cry", function(req, res){
        res.render("cry.ejs")
    })
}