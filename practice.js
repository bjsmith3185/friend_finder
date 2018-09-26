

var friends = [
    {
        name: "slash",
        picture: "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjWrYaF3NbdAhULn1MKHcGkDM0QjRx6BAgBEAU&url=https%3A%2F%2Fwww.gettyimages.com%2Fphotos%2Fgibson-usa-slash&psig=AOvVaw1wPtQek9daVe7H0SjsbLFr&ust=1537984275245327",
        rating: ["5", "5","5", "5","5", "5","5", "5","5", "5"]
    },
    {
       name: "tom",
       picture: "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjd46y75dbdAhXBwFMKHZssAQsQjRx6BAgBEAU&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FTom_Petty&psig=AOvVaw0vKOcmAUb_uhQbbBXc6xPT&ust=1537986801067200",
       rating: ["4", "4","4", "4","4", "5","5", "5","5", "5"]
   },
   {
       name: "daniel",
       picture: "http://pbskids.org/daniel",
       rating: ["5", "5","5", "5","3", "3","3", "3","3", "5"]
   }
];


// console.log(friends[0].rating)


var myScore = [
    {
        name: "brian",
        picture: "pic.jpg",
        rating: ["5", "5","5", "5","3", "3","3", "3","3", "5"]
    }
];

// var compareArray = [];

function add(a, b) {
    return parseFloat(a) + parseFloat(b);
}

 
function compare(friendArray, myScore) {
    var compareArray = [];
    for (var i = 0; i < friendArray.length; i++) {

        // console.log(friendArray[i].name);
    
        var differenceArray = [];
    
        for (var j = 0; j < friendArray[i].rating.length; j++) {
            // console.log(friendArray[i].rating[j])
            var delta = Math.abs(friendArray[i].rating[j] - myScore[0].rating[j])
            // console.log(delta);

            differenceArray.push(delta);
        }
    
        // console.log(differenceArray.reduce(add, 0));
        var temp = differenceArray.reduce(add, 0);
        compareArray.push(temp);
        // console.log(differenceArray);
        // console.log("----------------")
    
    };
    // console.log("this is compare Array")
    // console.log(compareArray);
    
    var min = Math.min.apply(Math, compareArray)
    
    // console.log(min);  // this will tell the closest value to 0
    
    var a = compareArray.indexOf(min);
    
    // console.log(a);  // this will tell the name postion in the array
    
    // console.log(`The closest match for you is: ${friendArray[a].name}`);  // this shows your new friend
    var firstNameResult = friendArray[a].name

    // console.log(firstNameResult);
    var imageResult;

    for (var b = 0; b < friends.length; b++) {
        if(firstNameResult === friends[b].name) {
            imageResult = friends[b].picture;
        }
    }

    var bestFriend = {
        name: firstNameResult,
        picture: imageResult
    }

    console.log(` your new friend is ${firstNameResult} and their picture is
    ${imageResult}
    `)

    return bestFriend;
    
}

compare(friends, myScore);









// for (var i = 0; i < friends.length; i++) {

//     console.log(friends[i].name);

//     var differenceArray = [];

//     for (var j = 0; j < friends[i].rating.length; j++) {
//         // console.log(friends[i].rating[j])
//         var delta = Math.abs(friends[i].rating[j] - myScore[0].rating[j])
//         // console.log(delta);
  
     

   
//         differenceArray.push(delta);
 


//     }

//     console.log(differenceArray.reduce(add, 0));
//     var temp = differenceArray.reduce(add, 0);
//     compareArray.push(temp);
//     // console.log(differenceArray);
//     console.log("----------------")

// };
// console.log("this is compare Array")
// console.log(compareArray);

// var min = Math.min.apply(Math, compareArray)

// console.log(min);  // this will tell the closest value to 0


// var a = compareArray.indexOf(min);

// console.log(a);  // this will tell the name postion in the array

// console.log(`The closest match for you is: ${friends[a].name}`);  // this shows your new friend



    