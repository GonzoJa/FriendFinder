// Your server.js file should require the basic npm packages we've used in class: express, body-parser and path
//express makes routing easy using nodejs
var express = require("express");
//body-parser allows to receive info back in JSON form
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3306;

/*var staticContentFolder = __dirname + "/public";
app.use(express.static(staticContentFolder));*/

//bodyParser makes it possible for our server to interpret data sent to it --standard code
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

//LISTENER
//code effectively "starts" our server

app.listen(PORT, function(){
  console.log("App listening on PORT: " + PORT);
});