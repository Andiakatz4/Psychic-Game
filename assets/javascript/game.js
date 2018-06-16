
//Define variables

var letters = ["a","b,","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var wins = 0;
var losses = 0;
var numGuesses = 9;
var guessChoices = [letters];


//game starts at 0

var score = 0;
var question = 0;

// user sees "Guess what letter I'm thinking of" ---> this is in html in p tags


//user guess by typing letter a-z

document.onkeypress = function(wins) {
    var userGuess = event.key;

    if(userGuess === computerChoice){
        wins++;
    }else{
        guesses--;
    }

    if(guesses = 0){
        losses++
    }

    document.getElementById('wins').innerHTML = "Wins: " + wins;
    document.getElementById('losses').innerHTML = "losses: " + losses;
    document.getElementById('guesses').innerHTML = "Guesses left: " + guesses;
}   

document.onkeyup = function () //I know I am supposed to used this for userGuess after working with my tutor but I don't know how

{
    var userGuess = event.key;
    var computerGuess = letters[Math.floor(Math.random()*letters.length)]; 

    var letters = ["a","b,","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
}



//user has 9 guesses -----> this is defined in our var numGuesses above


//if they guess incorrect then letter user typed appears on screen

//if they guess incorrect for all 5, they lose

// Wins: (# of times the user has guessed the letter correctly) increases by 1 if win - if they guess 1 correct in 9 chances, they win 

if (computerGuess === userGuess); {
    wins++;
    numGuesses = 9
    console.log("winner!");
}


// Losses: (# of times the user has failed to guess the letter correctly after exhausting all guesses) increases by 1 if lose

// Guesses Left: (# of guesses left. This will update) how many guess left out of 5

// Your Guesses So Far: (the specific letters that the user typed. Display these until the user either wins or loses.)

// When the player wins, increase the Wins counter and start the game over again (without refreshing the page).

// When the player loses, increase the Losses counter and restart the game without a page refresh (just like when the user wins).