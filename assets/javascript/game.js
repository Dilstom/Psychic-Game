    //array that lists out all of the options for Computer to choose from.
    var computerChoices = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o", "p","q","r","s","t","u","v","w","x","y","z"];

// Creating variables to hold the number of wins, losses, guesses. 
    var wins = 0;
    var losses = 0;
    var guessesLeft = 9;
    var userGuessLetter = [];
// This function is run whenever the user presses a key.
    document.onkeyup = function(event) {

// Determines which key was pressed.
      var userGuess = event.key;
        
//User's input is "pushed" to the userGuessLetter array
        userGuessLetter.push(userGuess);

 // Computer's guess randomly choses from the options array. 
      var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];


// somehow this "if" statements work.
      if ((userGuess === computerGuess) || (userGuess !== computerGuess)) {

        if (userGuess === computerGuess) {
          wins++; 
        } else if (userGuess != computerGuess) {
          losses++; guessesLeft--; }
        if (guessesLeft === 0) {
            reset(); alert("Game Over. Try Again?")
        }
// New var HTML to track of the user and computer guesses, and wins/losses.
        var html =
          "<p>You chose: " + userGuess + "</p>" +
          "<p>The computer chose: " + computerGuess + "</p>" +
          "<p>Wins: " + wins + "</p>" +
          "<p>Losses: " + losses + "</p>" +
          "<p>Guesses Left: " + guessesLeft + "</p>" +
            "<p>Guessed so Far: " + userGuessLetter.join(', ') +"</p>";
// user's guesses  are displayed 
        // Set the inner HTML contents of the #game div to our html string
        document.querySelector("#game").innerHTML = html;
      }
        
      };
      var reset = function() {
 wins = 0;
          losses = 0;
  guessesLeft = 9;
  userGuessLetter = [];


}
