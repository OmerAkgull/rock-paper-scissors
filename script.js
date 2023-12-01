function getComputerChoice() {
  let options = ["rock", "paper", "scissors"];
  let choice = options[Math.floor(Math.random() * options.length)];

  return choice;
}

const computerSelection = getComputerChoice();
const playerSelectionPrompt = prompt("Rock, paper, or scissors?");

function playRound(playerSelection, computerSelection) {

    console.log("Player:", playerSelection, "Computer:", computerSelection);
    const playerSelectionPrompt = prompt("Rock, paper, or scissors?");

  const winMessage = `You win! ${playerSelection} beats ${computerSelection}`;
  const loseMessage =  `You lose! ${computerSelection} beats ${playerSelection}`;
  const tieMessage = "It's a tie, go again!"

  if ((computerSelection === "paper") & (playerSelection === "rock")) {
    return loseMessage;
  } else if (
    (computerSelection === "scissors") &
    (playerSelection === "rock")
  ) {
    return winMessage;
  } else if (
    (computerSelection === "scissors") &
    (playerSelection === "paper")
  ) {
    return loseMessage;
  } else if ((computerSelection === "rock") & (playerSelection === "paper")) {
    return loseMessage;
  } else if (
    (computerSelection === "rock") &
    (playerSelection === "scissors")
  ) {
    return loseMessage;
  } else if (
    (computerSelection === "paper") &
    (playerSelection === "scissors")
  ) {
    return winMessage;
  } else {
    playRound(playerSelectionPrompt, getComputerChoice());
  }
}


function game() {
  for (let i = 0; i<5; i++) {
    playRound(playerSelectionPrompt, computerSelection);
  }
};

console.log(game());