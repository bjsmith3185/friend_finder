var path = require("path");

module.exports = function(app) {
    app.get("/questions", function(req, res) {
        res.sendFile(path.join(__dirname + "/../public/questionsModal.html"))
    })

    app.get("/" , function(req, res) {
        res.sendFile(path.join(__dirname + "/../public/index.html"))
    })


    // app.get("/api/friends", function(req, res) {
    //     res.sendFile(path.join(__dirname + "/../public/friends.html"))
    //   });

    app.use(function(req, res) {
        res.sendFile(path.join(__dirname + "/../public/index.html"))
    })


}

