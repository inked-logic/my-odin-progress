// rock-paper-scissors

// declaring a global counters

let roundCounter = 0;
let userScoreCount = 0;
let computerScoreCount = 0;

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
  roundCounter++;
  switch (winner) {
    case "user":
      userScoreCount++;
      return `You won! ${userChoice} beats ${computerChoice} // User: ${userScoreCount} - ${computerScoreCount} :Computer`;
    case "computer":
      computerScoreCount++;
      return `Computer won! ${computerChoice} beats ${userChoice} // User: ${userScoreCount} - ${computerScoreCount} :Computer`;
    case "draw":
      userScoreCount++;
      computerScoreCount++;
      return `It's a draw! Score: User: ${userScoreCount} - ${computerScoreCount} :Computer`;
  }
}

// play a total of 5 rounds while keeping counting the number of rounds won by each player

function game() {
  let overallWinner;
  for (let i = 0; i < 5; i++) {
    console.log(playRound());
  }
  if (userScoreCount > computerScoreCount) {
    overallWinner = "You won!";
  } else if (computerScoreCount > userScoreCount) {
    overallWinner = "Computer won!";
  } else {
    overallWinner = "It's a draw!";
  }
  console.log(
    `Game finished! ${overallWinner} User: ${userScoreCount} - ${computerScoreCount} :Computer`
  );
}

// display the results

// ask the user if he wants to play again (yes or no question)

// if yes replay, if no exit
