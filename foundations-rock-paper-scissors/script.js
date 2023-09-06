// rock-paper-scissors

// ask the user for a string as an input, must be one of the three possible choices (rock, paper, scissors)
// check if the input is correctly formatted
function getUserInput() {
  return prompt(
    "Please pick a choice from the following options:\nrock, paper or scissors."
  ).toLowerCase();
}

function checkUserInput(choice) {
  switch (choice) {
    case "rock":
    case "paper":
    case "scissors":
      return true;
    default:
      return false;
  }
}

function informIncorrectUserInput() {
  alert(
    "Incorrect user input, please make sure your input is correctly formatted."
  );
}

function getUserChoice() {
  let userChoice = getUserInput();
  let keepGoing = checkUserInput(userChoice) ? false : true;
  while (keepGoing) {
    informIncorrectUserInput();
    userChoice = getUserInput();
    keepGoing = checkUserInput(userChoice) ? false : true;
  }
  return userChoice;
}

// Generate a random choice from the possible choices using the function explained below
// getComputerChoice => a function that returns a random choice [String] from (rock, paper, scissors)

function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

// Compare the user's choice with the random choice returned by getComputerChoice and return the winner as a string

function getWinner(userChoice, computerChoice) {
  if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    return "user";
  } else if (
    (computerChoice === "rock" && userChoice === "scissors") ||
    (computerChoice === "paper" && userChoice === "rock") ||
    (computerChoice === "scissors" && userChoice === "paper")
  ) {
    return "computer";
  } else {
    return "draw";
  }
}

function playRound() {
  let userChoice = getUserChoice();
  let computerChoice = getComputerChoice();
  let winner = getWinner(userChoice, computerChoice);
  return getRoundWinner(winner, userChoice, computerChoice);

}

function getRoundWinner(winner, userChoice, computerChoice) {
  switch (winner) {
    case "user": return `You won! ${userChoice} beats ${computerChoice}`
    case "computer": return `You won! ${computerChoice} beats ${userChoice}`
    case "draw": return "It's a draw!"
  }
}

// play a total of 5 rounds while keeping counting the number of rounds won by each player

function game(){
  for (let i = 0; i < 5; i++) {
    console.log(playRound());
  } 
}

// display the results

// ask the user if he wants to play again (yes or no question)

// if yes replay, if no exit
