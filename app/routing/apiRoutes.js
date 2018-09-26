
var path = require("path");
var friends = require("../data/friends.js");

module.exports = function(app) {
    app.get("/api/friends", function(req, res) {

      
            // res.sendFile(path.join(__dirname + "/../public/friends.html"))
     
    //     console.log(friends);
       res.json(friends);
    })


    app.post("/api/friends", function(req, res) {
        // req.body hosts is equal to the JSON post sent from the user
        // This works because of our body-parser middleware
        var newFriend = req.body;
      
        // // Using a RegEx Pattern to remove spaces from newCharacter
        // // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
        // newcharacter.routeName = newcharacter.name.replace(/\s+/g, "").toLowerCase();
        console.log("this is the data")
        // console.log(newFriend);
        console.log(newFriend.data)







        
      
        // characters.push(newcharacter);
      
        // res.json(newcharacter);
      });

}