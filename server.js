var express = require("express"); //require npm express
var bodyParser = require("body-parser"); //require npm body-parser
var app = express(); //set app variable for express

var PORT = process.env.PORT || 3000; //setting port to 3000 (using process.env for heroku)

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" })); //standard body parser code
app.use(express.static(__dirname + '/app/public')); //create a static public directory for CSS and image files

require("./app/routing/apiRoutes")(app); //setting routing for friends JSON
require("./app/routing/htmlRoutes")(app); //setting routing for html switches

app.listen(PORT, function() { //add express port listener
  console.log("App listening on PORT: " + PORT);
});