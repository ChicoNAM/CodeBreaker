/* computer generates numbers */

var cpuNumber_1 = Math.round(Math.random() * 9 + 0.5);
var cpuNumber_2 = Math.round(Math.random() * 9 + 0.5);
var cpuNumber_3 = Math.round(Math.random() * 9 + 0.5);

/* counters for guesses */
var guessCounter = 0;
var maxGuesses = 12;

/* get element for guesses in html */

document.getElementById('remainingTries').textContent = `You have ${maxGuesses} tries left.`;

/* function to access in html */

function makeGuess() {
var playerGuess = document.getElementById('playerGuess').value;

  // check input length
if (playerGuess.length !== 3) {
    document.getElementById('guessDisplay').textContent = "Invalid input.";
    return;
}

var guessNumber_1 = playerGuess.charAt(0);
var guessNumber_2 = playerGuess.charAt(1);
var guessNumber_3 = playerGuess.charAt(2);

var correctIndex = 0;
var correctNumber = 0;

  // Check positions and numbers
if (guessNumber_1 == cpuNumber_1) {
    correctIndex++;
} else if (guessNumber_1 == cpuNumber_2 || guessNumber_1 == cpuNumber_3) {
    correctNumber++;
}

if (guessNumber_2 == cpuNumber_2) {
    correctIndex++;
} else if (guessNumber_2 == cpuNumber_1 || guessNumber_2 == cpuNumber_3) {
    correctNumber++;
}

if (guessNumber_3 == cpuNumber_3) {
    correctIndex++;
} else if (guessNumber_3 == cpuNumber_1 || guessNumber_3 == cpuNumber_2) {
    correctNumber++;
}

guessCounter++;

document.getElementById('guessDisplay').textContent = `${correctIndex} numbers at the correct index and ${correctNumber} other numbers are guessed correctly.`;

var remainingTries = maxGuesses - guessCounter;
document.getElementById('remainingTries').textContent = `You have ${remainingTries} tries left.`;

if (correctIndex === 3 && guessCounter <= maxGuesses) {
    document.getElementById('guessDisplay').textContent = `You guessed the correct number! The number was ${cpuNumber_1}${cpuNumber_2}${cpuNumber_3}`;
    disableGame();
} else if (guessCounter >= maxGuesses) {
    document.getElementById('guessDisplay').textContent = `You have failed to crack the code. The correct number was ${cpuNumber_1}${cpuNumber_2}${cpuNumber_3}`;
    disableGame();
}
}

function disableGame() {
document.getElementById('playerGuess').disabled = true;
document.querySelector('button').disabled = true;
}