var friends = require("../data/friends");

module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
  	res.header('json'); //prevents Chrome MIME error for HTML header with json response
    res.json(friends);
  });

  app.post("/api/friends", function(req, res) {
  	var userRes = req.body; 	
  	var userAns = userRes.answers;

  	var match = {
  		name: "",
  		image: "",
  		description: "",
  		findAns: 50
  	}

	var difference;

	var duplicate = false;

  	for (var i=0; i < friends.length; i++) {
  		var currentFriend = friends[i];
  		difference = 0;

  		for (var j=0; j < currentFriend.answers.length; j++) {
  			var currentFriendAns = currentFriend.answers[j];
  			var currentUserAns = userAns[j];
  			difference += Math.abs(parseInt(currentUserAns)-parseInt(currentFriendAns));
  		}
  		console.log(currentFriend.name+" | match:"+difference);
  		if (difference <= match.findAns) {
  			match.name = currentFriend.name;
  			match.image = currentFriend.image;
  			match.description = currentFriend.description;
  			match.findAns = difference;
  		}
  		if (currentFriend.name === userRes.name) {
  			match.name = "duplicate";
  			duplicate = true;
  		}
  	}

  	if (duplicate === false) {
  		friends.push(userRes);
	}
	res.header('json'); //prevents Chrome MIME error for HTML header with json response
  	res.json(match);
  });

}