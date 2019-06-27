 //MORE PSUEDO CODE TO HELP WITH CREATING VARIOUS FUNCTIONS:
 //NEEED FUNCTIONS THAT HANDLE GAME PLAY
 //NEED FUNCTIONS THAT HANDLE WHAT IS DISPLAY WHEN PLAYER WINS / LOSES/ HITS WRONG KEY / TO START GAME



 //-----------------------------------------------GAME - PLAY - CODE----------------------------------------------// 

 // Create an array of possible words

 // Listen for a key to be pressed to start the game

 // Randomize the list of puzzles
 // Select the first puzzle to be solved.
 // Listen for keyboard input
 // if the user gueses a letter correctly, display that letter wherever it exists in the puzzle
 // if the user guesses incorrectly
 // add that letter to the already guessed
 // decrement number remaining guesses
 // display a new part of the losing game pic

 // if the user wins or loses the game
 // increment win/loss counter if applicable
 // restart game with new puzzle
 // 


 // Create an array that lists out all of the options for unsolved word 
 var wordBank = ["kramer", "gypsy", "elaine", "kramerica", "bosco", "george", "newmania", "sponge", "puddy"];


 // Creates an array that lists out all of the letter options for user to select
 var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r",
     "s", "t", "u", "v", "w", "x", "y", "z"
 ];

 //Creates an array we can push incorrect letters to
 var wrongGuess = [];

 // Selects random word from wordBank
 var wordToGuess = wordBank[Math.floor(Math.random() * wordBank.length)];
 console.log(wordToGuess);

 //Create an array with valid letters the user can guess by making all letters lower case then Spliting the wordToGuess into an array 
 //  var validGuess = wordToGuess.toLowerCase().split("");


 //  console.log(validGuess);

 //  var blankWordDisplayed = "";

 var blankWordDisplayed = [];

 function wordToBlanks() {




     for (var i = 0; i < wordToGuess.length; i++) {
         blankWordDisplayed.push('_');
     }



 }

 wordToBlanks();
 console.log(blankWordDisplayed);


 //  var remainingLetters = validGuess.length;
 var remainingGuesses = 9;

 // DOM elements
 var wordToDisplay = document.getElementById("wordToDisplay");


 var invalidGuessesBank = document.getElementById("invalidGuesses");
 var remainingGuessesDisplay = document.getElementById("remainingGuesses");

 // var winsDisplay = document.getElementById("roundsWon");
 // var lossesDisplay = document.getElementById("roundsLost");
 // var answer = document.getElementById("answer");



 document.onkeyup = function (event) {
         if (event.which >= 65 && event.which <= 90) {
             var userGuess = event.key;

             if (userGuesses.includes(userGuess)) {
                 alert("you guessed " + userGuess + " already")
                 return false
             } else {



                 console.log(userGuess)

                 for (var i = 0; i < wordToGuess.length; i++) {
                     console.log(wordToGuess[i])
                     if (userGuess === wordToGuess[i]) {
                         console.log("condition hit")
                         blankWordDisplayed[i] = userGuess
                         console.log(blankWordDisplayed)
                         wordToDisplay.textContent = blankWordDisplayed.join(" ");
                     }
                 }


             }




             //      //while there are still letters left and user still has guesses and the user guess is a letter in alphabet)
             //      while ((remainingLetters > 0) && (remainingGuesses > 0) && (alphabet.indexOf(userGuess.toLowerCase) !== -1)) {
             //          //if the users guess does not return a value of -1 in indexOf then it is in that array
             //          if (validGuess.indexOf(userGuess) !== -1) {
             //              //if it is in the array loop through validGuess 
             //              //if the user guess letter matches the letter in wordToGuess 
             //              //replace the blankWordToDiplay with that letter at the same index
             //              //if not move on to next letter
             //              for (var i = 0; i < wordToGuess; i++) {
             //                  if (wordToGuess.charAt(i) === userGuess) {
             //                      blankWordDisplayed[i] = userGuess;
             //                      remainingLetters--;
             //                      remainingGuesses--;
             //                  } else {
             //                      console.log(blankWordDisplayed);
             //                  }
             //                  return blankWordDisplayed;
             //              }
             //          } else {
             //              wrongGuess = wrongGuess.push(userGuess);


             //          }

             //      }
             //  }





             // Display 

             wordToDisplay.textContent = blankWordDisplayed.join(" ");
             invalidGuessesBank.textContent = "Wrong Letters Guessed: " + wrongGuess;
             remainingGuessesDisplay.textContent = "Remaining Guesses:   " + remainingGuesses;


         }
         //-----------------------------------DISPLAY CODE CHANGING DISPLAY --------------------------------------------//

         // var userMessage = document.getElementById("userMessage");
         // var userImage = document.getElementById("userImg");

         // var startGameMessage = ;
         // var startGameImg = ;

        //  var wrongKeyMessage = ;
        //  var wrongKeyImg = ;

         // var winMessage = ;
         // var winImg = ;

         // var lossMessage = ;
         // var lossImg = ;

         //if current state of game has not begun yet display start game displays// 



         //WRONG KEY DISPLAY 

         //GAME OVER DISPLAY

         //YOU WON DISPLAY