
var path = require("path");
var friends = require("../data/friends.js");

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.send(friends);
    })


    app.post("/api/questions", function (req, res) {

        var newFriend = req.body;

        var yourName = newFriend.first;

        var matchFriend = compare(friends, newFriend);


        if(matchFriend) {
            friends.push(newFriend);
        }

        res.json(matchFriend)
    });
}


function add(a, b) {
    return parseFloat(a) + parseFloat(b);
}


function compare(friendArray, myScore) {
    var yourName = myScore.first;

    var compareArray = [];
    for (var i = 0; i < friendArray.length; i++) {
        var differenceArray = [];

        for (var j = 0; j < friendArray[i].rating.length; j++) {
            var delta = Math.abs(friendArray[i].rating[j] - myScore.rating[j])
            differenceArray.push(delta);
        }

        var temp = differenceArray.reduce(add, 0);
        compareArray.push(temp);
    };

    var min = Math.min.apply(Math, compareArray)
    var a = compareArray.indexOf(min);
    var matchFirstName = friendArray[a].first;
    var fullNameResults = friendArray[a].first + " " + friendArray[a].last;
    var imageResult;

    for (var b = 0; b < friends.length; b++) {
        if (matchFirstName === friends[b].first) {
            imageResult = friends[b].picture;
        }
    }

    var bestFriend = {
        name: fullNameResults,
        picture: imageResult,
        "yourName": yourName,
    }

    return bestFriend;


}
