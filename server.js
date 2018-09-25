

var express = require("express");
var app = express();
var bodyParser = require("body-parser");

// var path = require("path");
var PORT = process.env.PORT || 8080;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(PORT, function() {
    console.log("listening on port: http://localhost:" + PORT);
})

require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);


// app.use(function(req, res) {
//     res.sendFile(path.join(__dirname + "/app/public/index.html"))
// })
// app.get("/" , function(req, res) {
//     res.sendFile(path.join(__dirname + "/app/public/index.html"))
// })

// app.get("/questions", function(req, res) {
//     res.sendFile(path.join(__dirname + "/app/public/questions.html"))
// })

   




