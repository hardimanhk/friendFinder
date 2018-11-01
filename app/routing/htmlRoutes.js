var express = require("express");
var app = express();

function getHome() {
    app.get("/", function (req, res) {
        res.sendFile("home.html");
    });
}

function getSurvey() {
    app.get("/survey", function (req, res) {
        res.sendFile("survey.html");
    });
}

module.exports = {
    home: getHome(),
    survey: getSurvey()
}