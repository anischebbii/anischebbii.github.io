const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";

const gameContainer = document.getElementById("game-container");
const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const scissorsBtn = document.getElementById("scissors-btn");

const resultMsg = document.createElement("p");
resultMsg.classList.add("result-msg");
gameContainer.appendChild(resultMsg);

const scoreMsg = document.createElement("p");
scoreMsg.classList.add("score-msg");
gameContainer.appendChild(scoreMsg);

const newGameBtn = document.createElement("button");
newGameBtn.classList.add("new-game-btn");
newGameBtn.textContent = "New Game";
newGameBtn.style.display = "none";
gameContainer.appendChild(newGameBtn);

let playerName = prompt("Enter your name:");
let playerScore = 0;
let computerScore = 0;
let roundCount = 0;
const maxRounds = 3;

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    roundCount = 0;
    resultMsg.textContent = "";
    scoreMsg.textContent = "";
    newGameBtn.style.display = "none";
}

function playGame(playerSelection) {
    if (roundCount >= maxRounds) {
        return;
    }

    // Generate computer's selection
    const computerSelection = computerPlay();

    // Compare playerSelection and computerSelection
    let result;
    if (playerSelection === computerSelection) {
        result = "Tie game!";
    } else if (
        (playerSelection === ROCK && computerSelection === SCISSORS) ||
        (playerSelection === PAPER && computerSelection === ROCK) ||
        (playerSelection === SCISSORS && computerSelection === PAPER)
    ) {
        playerScore++;
        result = "You win!";
    } else {
        computerScore++;
        result = "You lose!";
    }

    // Display the result
    resultMsg.textContent = `Round ${roundCount+1}: You chose ${playerSelection}, computer chose ${computerSelection}. ${result}`;
    roundCount++;

    if (roundCount === maxRounds) { // 2 out of 3 player wins or maxRounds=3 end the game and display final score and the reset (play again) button
        displayFinalScore();
    }
}

function computerPlay() {
    const choices = [ROCK, PAPER, SCISSORS];
    return choices[Math.floor(Math.random() * choices.length)];
}

function displayFinalScore() {
    let winner;
    if (playerScore > computerScore) {
        winner = `${playerName} wins!`;
    } else if (playerScore < computerScore) {
        winner = "Computer wins!";
    } else {
        winner = "It's a tie!";
    }
    scoreMsg.textContent = `Final Score: ${playerName} ${playerScore} - Computer ${computerScore}. ${winner}`;
    newGameBtn.style.display = "block";
}

rockBtn.addEventListener("click", () => playGame(ROCK));
paperBtn.addEventListener("click", () => playGame(PAPER));
scissorsBtn.addEventListener("click", () => playGame(SCISSORS));
newGameBtn.addEventListener("click", resetGame);