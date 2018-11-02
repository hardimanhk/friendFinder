var friends = require("../data/friends");

module.exports = function(app) {
    app.get("/api/friends", function (req, res) {
        return res.json(friends);
    });
    app.post("/api/friends", function (req, res) {
        var newFriend = req.body;
        console.log(newFriend);
    });
}

// app.post("/api/reservations", function(req, res){
//     var newTable = req.body;
//     newTable.id = count;
//     count++;
//     if(reservations.length < 5){
//         reservations.push(newTable);
//         res.json(reservations);
//     }else{
//         waitList.push(newTable);
//         var position = waitList.length;
//         res.json(waitList);
//     }
// });