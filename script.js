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

function playGame(playerSelection) {
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
		result = "You win!";
	} else {
		result = "You lose!";
	}
	
	// Display the result
	resultMsg.textContent = `You chose ${playerSelection}, computer chose ${computerSelection}. ${result}`;
}

function computerPlay() {
	const choices = [ROCK, PAPER, SCISSORS];
	return choices[Math.floor(Math.random() * choices.length)];
}

rockBtn.addEventListener("click", () => playGame(ROCK));
paperBtn.addEventListener("click", () => playGame(PAPER));
scissorsBtn.addEventListener("click", () => playGame(SCISSORS));