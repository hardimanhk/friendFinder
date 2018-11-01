var express = require("express");
var path = require("path");

var html = require("./app/routing/htmlRoutes");
var api = require("./app/routing/apiRoutes");

var app = express();
var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + '/app/public'));

api.get;
api.post;
html.home;
html.survey;

app.listen(PORT, function(){
    console.log("Server listening on port:" + PORT);
});