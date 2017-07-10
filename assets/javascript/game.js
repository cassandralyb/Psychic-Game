

// Declare the varianbles used in the html
var game = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var win = 1;			
var loss = 1;		
var guessLeft = 8;
	 
// Grabbing the id
function getElementbyId(element){
	var userChoice = document.getElementById(element);
	return userChoice;
} 

// Press a key and the game will record the event
document.onkeyup = function(event){

	// The number the game chooses
	var gameGuess = Math.floor(Math.random() * game.length),

		// The choice of the game
		randomGuess = game[gameGuess],

		userChoice = document.createTextNode(event.key + ", ");

		// This shows the letters being guessed as the user types
		getElementbyId("guess").appendChild(userChoice);

		// If the user chooses the same letter as the game...
		if(randomGuess === event.key){
			getElementbyId("win").textContent = "Win: " + win++;
			
			// The user wins and recieves one point
			if(win >= 1){
				getElementbyId("guessLeft").textContent = "Guess Left: " + 9;
				guessLeft = 8;
				
				// If the user does not guess the correct letter, guesses continue through 9
				alert("You Won!");
				} 
	} 
		
		else{

			// If the user is wrong in their guess, display guesses left.
			getElementbyId("guessLeft").textContent = "Guesses Left: " + guessLeft--;

			if(guessLeft <= -1){

				getElementbyId("loss").textContent = "Losses: " + loss++;
				
				// Alerts the user they have lost
				alert("You Lost");

				// This starts again if you have no additional guesses
				getElementbyId("guessLeft").textContent = "Guesses Left: " + 9;
				guessLeft = 8;

				}
			} 
		} 
