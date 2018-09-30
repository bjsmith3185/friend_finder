

var express = require("express");
var app = express();
var bodyParser = require("body-parser");

var PORT = process.env.PORT || 8080;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(PORT, function() {
    console.log("listening on port: http://localhost:" + PORT);
})

require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);







