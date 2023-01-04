module.exports = function(app){
    app.get("/gameOperateMain", function(req, res){
        res.render("gameOperate/gameOperateMain.ejs");
    })
}