function getComputerChoice() {
  let options = ["rock", "paper", "scissors"];
  let choice = options[Math.floor(Math.random() * options.length)];

  return choice;
}

const computerSelection = getComputerChoice();
const playerSelection = "rock";
const playerSelectionFixed = playerSelection.toLowerCase();

function playRound(playerSelection, computerSelection) {
  if ((computerSelection === "paper") & (playerSelection === "rock")) {
    return "You lose! Paper beats rock.";
  } else if (
    (computerSelection === "scissors") &
    (playerSelection === "rock")
  ) {
    return "You win! Rock beats scissors.";
  } else {
    playRound(playerSelectionFixed, getComputerChoice());
  }
}

console.log("Player:", playerSelection, "Computer:", computerSelection);
playRound(playerSelectionFixed, computerSelection);
