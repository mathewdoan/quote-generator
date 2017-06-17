/* By Mathew Doan */


var quoteBank = ["You miss 100% of the shots you dont take\" - Wayne Gretsky",
				"RYAN STARTED THE FIRE!!! RYAN THE INTERN HE STARTED THE FIRE!!!!",
				"Ill do whatever it takes to win games, whether it sitting on a bench waving a towel, handing a cup of water to a teammate, or hitting the game-winning shot.",
				"I love electric cars, i am not an alien, i am a human",
				"Mathew Doan is a fine young man with great aptitude",
				"LEBRONNNNNNNNNNNNN JAMES!!!!!!!!!!!!!",
				"I can not tell a lie, mathew doan is a fine young man",
				"Everything negative - pressure, challlenges, is an opportunity for me to rise"

];

var authorBank =	["Michaek Scott",
					"Dwight Schrute",
					"Kobe Bryant",
					"Elon Musk",
					"Barack Obama",
					"Lebron James",
					"George Washington",
					"Ellen Degeneres"
];

function newQuote() {
	var g = random();
	document.getElementById('quote-quote').innerHTML = quoteBank[g];
	document.getElementById("quote-author").innerHTML = authorBank[g];
}



function random(){
	var x = Math.floor(Math.random() * quoteBank.length);
	return x;
}

function tweetThis() {
	alert("Tweeting Not Supported By This Browser.");

}


$( document ).ready(function() {
	newQuote();
 
});
