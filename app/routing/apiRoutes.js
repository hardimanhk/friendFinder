var friends = require("../data/friends");

module.exports = function(app) {
    app.get("/api/friends", function (req, res) {
        return res.json(friends);
    });
    app.post("/api/friends", function (req, res) {
        var newFriend = req.body;
        var difference;
        var smallestDiff = 1000;
        var closestFriend = "";
        for (var i = 0; i < friends.length; i++) {
            difference = 0;
            for (var j = 0; j < 10; j++) {
                difference += Math.abs(parseInt(friends[i].scores[j]) - parseInt(newFriend.scores[j].charAt(0)));
            }
            if (difference < smallestDiff) {
                smallestDiff = difference;
                closestFriend = friends[i].name;
            }
        }
        friends.push(newFriend);
        console.log(friends);
    });
}
