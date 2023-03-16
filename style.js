function getUserChoice() {
    let userInput = prompt("Please choose Rock, Paper, or Scissors:");
    userInput = userInput.toLowerCase();
  
    if (userInput === "rock" || userInput === "paper" || userInput === "scissors") {
      return userInput;
    } else {
      alert("Invalid input. Please choose Rock, Paper, or Scissors.");
      return getUserChoice();
    }
  }
  
  function getComputerChoice() {
    const random = Math.floor(Math.random() * 3);
    switch (random) {
      case 0:
        return "rock";
      case 1:
        return "paper";
      case 2:
        return "scissors";
    }
  }
  
  function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
      return "It's a tie!";
    }
  
    if (userChoice === "rock") {
      return computerChoice === "scissors" ? "You win!" : "You lose!";
    }
  
    if (userChoice === "paper") {
      return computerChoice === "rock" ? "You win!" : "You lose!";
    }
  
    if (userChoice === "scissors") {
      return computerChoice === "paper" ? "You win!" : "You lose!";
    }
  }
  
  function playGame() {
    const userChoice = getUserChoice();
    const computerChoice = getComputerChoice();
    alert("You chose: " + userChoice + "\nComputer chose: " + computerChoice);
    alert(determineWinner(userChoice, computerChoice));
  }