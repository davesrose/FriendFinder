var friends = require("../data/friends"); //create friends variable from friends JSON

module.exports = function(app) { //create module for api friends

  app.get("/api/friends", function(req, res) { //create link for viewing friends JSON
  	res.header('json'); //prevents Chrome MIME error for HTML header with json response
    res.json(friends);
  });

  app.post("/api/friends", function(req, res) { //post callback for handling the new user's form data with the friends JSON
  	var userRes = req.body; //create userRes from "req", survey form's data
  	var userAns = userRes.answers; //create userAns from the survey answers portion

  	var match = { //create a match object to pass as response
  		name: "",
  		image: "",
  		description: "", //object names are the same as the friends JSON items
  		findAns: Infinity //setting a findAns score to maximum value (even if array gets larger with new entries)
  	}

	var difference; //create difference variable for finding difference between friend answer arrays and current user answers

	var duplicate = false; //creating dublicate boolean in case same person tries filling out survey again

  	for (var i=0; i < friends.length; i++) { //create loop that goes through friends array
  		var currentFriend = friends[i]; //create a current friend variable from the friends array
  		difference = 0; //set initial difference variable to 0

  		for (var j=0; j < currentFriend.answers.length; j++) { //create a nested loop that will go through each friend answer array
  			var currentFriendAns = currentFriend.answers[j]; //create a current friend answer variable from the answers array
  			var currentUserAns = userAns[j]; //create a user answer variable from user answer array
  			difference += Math.abs(parseInt(currentUserAns)-parseInt(currentFriendAns)); //keep adding the difference between the corresponding 
  		}
  		console.log(currentFriend.name+" | match:"+difference); //log each persons match score with current user
  		if (difference <= match.findAns) { //if new returned difference score is less then or equal to the previous matched score difference
  			match.name = currentFriend.name; //update match name
  			match.image = currentFriend.image; //update match image
  			match.description = currentFriend.description; //update match description
  			match.findAns = difference; //update match score
  		}
  		if (currentFriend.name === userRes.name) { //if the match name equals the user name
  			match.name = "duplicate"; //set the match name as duplicate
  			duplicate = true; //set duplicate boolean as true
  		}
  	}

  	if (duplicate === false) { //if set duplicate boolean is false
  		friends.push(userRes); //then push the new user data into the friends JSON
	}
	res.header('json'); //prevents Chrome MIME error for HTML header with json response
  	res.json(match); //set response as match object
  });

}