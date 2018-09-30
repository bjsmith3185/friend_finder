var path = require("path");
var friends = require("../data/friends.js");

module.exports = function(app) {
    app.get("/questions", function(req, res) {
        res.sendFile(path.join(__dirname + "/../public/question.html"))
        // res.sendFile(path.join(__dirname + "/../public/questions_practice.html"))
    })

    app.get("/" , function(req, res) {
        res.sendFile(path.join(__dirname + "/../public/index.html"))
    })


    app.get("/friends", function(req, res) {
        res.sendFile(path.join(__dirname + "/../public/friends.html"))
      });

    app.use(function(req, res) {
        res.sendFile(path.join(__dirname + "/../public/index.html"))
    })


}

