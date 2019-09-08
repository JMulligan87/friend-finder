var friends = require("../data/friends");

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function (req, res) {
        var userInput = req.body.scores
        var scoresArr = [];
        var bestFriend = 0;
        for (var i = 0; i < friends.length; i++) {
            var diff = 0;

            for (var j = 0; j < userInput.length; j++) {
                diff += Math.abs(friends[i].scores - userInput[j])
            }
            scoresArr.push(diff);
        }
        for (var i = 0; i < scoresArr.length; i++) {
            if (scoresArr[i] <= scoresArr[bestFriend]) {
                bestFriend = i
            }
        }
        var bestestFriend = friends[bestFriend]
        res.json(bestestFriend)

        friends.push(req.body)
    });
};