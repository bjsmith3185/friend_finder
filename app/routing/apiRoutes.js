
var path = require("path");
var friends = require("../data/friends.js");

module.exports = function(app) {
    app.get("/api/friends", function(req, res) {

      
            // res.sendFile(path.join(__dirname + "/../public/friends.html"))
     
    //     console.log(friends);
       res.json(friends);
    })


    app.post("/api/questions", function(req, res) {
        // req.body hosts is equal to the JSON post sent from the user
        // This works because of our body-parser middleware
        var newFriend = req.body;
      
        // // Using a RegEx Pattern to remove spaces from newCharacter
        // // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
        // newcharacter.routeName = newcharacter.name.replace(/\s+/g, "").toLowerCase();
        console.log("this is the data")
        // console.log(newFriend);
        console.log(newFriend)

        // logic from practice.js

    // return the best friend object here


    compare(friends, newFriend);





        // alter the function compare to give the results and put them below
        res.json(compare(friends,newFriend))











      
        // characters.push(newcharacter);
      
        // res.json(newcharacter);
      });

}


function add(a, b) {
    return parseFloat(a) + parseFloat(b);
}

 
function compare(friendArray, myScore) {
    var compareArray = [];
    for (var i = 0; i < friendArray.length; i++) {

        console.log(friendArray[i].name);
    
        var differenceArray = [];
    
        for (var j = 0; j < friendArray[i].rating.length; j++) {
            // console.log(friendArray[i].rating[j])
            var delta = Math.abs(friendArray[i].rating[j] - myScore.rating[j])
            // console.log(delta);

            differenceArray.push(delta);
        }
    
        console.log(differenceArray.reduce(add, 0));
        var temp = differenceArray.reduce(add, 0);
        compareArray.push(temp);
        // console.log(differenceArray);
        console.log("----------------")
    
    };
    console.log("this is compare Array")
    console.log(compareArray);
    
    var min = Math.min.apply(Math, compareArray)
    
    console.log(min);  // this will tell the closest value to 0
    
    var a = compareArray.indexOf(min);
    
    console.log(a);  // this will tell the name postion in the array
    
    console.log(`The closest match for you is: ${friendArray[a].name}`);  // this shows your new friend

        var firstNameResult = friendArray[a].name

            var imageResult;

        for (var b = 0; b < friends.length; b++) {
            if(firstNameResult === friends[b].name) {
                imageResult = friends[b].picture;
            }
        }
        console.log("this is imageresult: " + imageResult);

        var bestFriend = {
            name : firstNameResult,
            picture : imageResult
        }

    return bestFriend;

    
}



//-------------------------------------------------------



// function compare(friendArray, myScore) {
//     var compareArray = [];
//     for (var i = 0; i < friendArray.length; i++) {

//         // console.log(friendArray[i].name);
    
//         var differenceArray = [];
    
//         for (var j = 0; j < friendArray[i].rating.length; j++) {
//             // console.log(friendArray[i].rating[j])
//             var delta = Math.abs(friendArray[i].rating[j] - myScore[0].rating[j])
//             // console.log(delta);

//             differenceArray.push(delta);
//         }
    
//         // console.log(differenceArray.reduce(add, 0));
//         var temp = differenceArray.reduce(add, 0);
//         compareArray.push(temp);
//         // console.log(differenceArray);
//         // console.log("----------------")
    
//     };
//     // console.log("this is compare Array")
//     // console.log(compareArray);
    
//     var min = Math.min.apply(Math, compareArray)
    
//     // console.log(min);  // this will tell the closest value to 0
    
//     var a = compareArray.indexOf(min);
    
//     // console.log(a);  // this will tell the name postion in the array
    
//     // console.log(`The closest match for you is: ${friendArray[a].name}`);  // this shows your new friend
//     var firstNameResult = friendArray[a].name

//     // console.log(firstNameResult);
//     var imageResult;

//     for (var b = 0; b < friends.length; b++) {
//         if(firstNameResult === friends[b].name) {
//             imageResult = friends[b].picture;
//         }
//     }

//     var bestFriend = {
//         "name": firstNameResult,
//         "picture": imageResult
//     }

//     console.log(` your new friend is ${firstNameResult} and their picture is
//     ${imageResult}
//     `)

//     return bestFriend;
    
// }


