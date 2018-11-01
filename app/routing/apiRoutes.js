var friends = require("../data/friends.js");

function getAPI() {
    app.get("/api/friends", function (req, res) {
        return res.json(friends);
    });
}

function postAPI() {
    app.post("/api/friends", function (req, res) {
        var newFriend = req.body;
        console.log(newFriend);
    });
}

module.exports = {
    get: getAPI(),
    post: postAPI()
};

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