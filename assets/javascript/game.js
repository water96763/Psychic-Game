           
                //make an array with letters
let letterArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let guessedArray = [];
                // make the computer choose a random letter 
computerChoice = letterArray[Math.round(Math.random() * 23)];
                //dbl check if works
    console.log(computerChoice);
                //set to starting values
let wins = 0;
let losses = 0;
let remainingGuesses = 9;
                //linking html with javascript below
let computerChoiceText = document.getElementById("computerChoice");
let winsText= document.getElementById("winsText");
let lossesText = document.getElementById("lossesText");
let remainingGuessesText = document.getElementById("remainingGuesses");
let userChoiceText = document.getElementById("userChoice");

    document.onkeyup = function (event) {       //have person pick a letter and capture with onkeyup
        let userChoice = event.key;
        console.log(userChoice);                //dbl check it works   
        guessedArray.push(userChoice);
        displayNew();
            if (userChoice === computerChoice) {    //compare the computer choice with the person's choice
                wins++;
                gameOver ();
            } else if (remainingGuesses -1 === 0) {
                remainingGuesses = 9;
                losses++;
                gameOver ();
            } else {
                remainingGuesses--;
            }

        function gameOver () {
            remainingGuesses = 9;
            guessedArray = [];
            computerChoice = letterArray[Math.round(Math.random() * 23)];
        }
      

    
function displayNew() {
    winsText.textContent = "wins: " + wins;
    lossesText.textContent = "losses: " + losses;
    remainingGuessesText.textContent = "Number of remaining guesses: " + remainingGuesses;
    guessedArrayText.textContent = "Letters already chosen: " + guessedArray;
}
    }
