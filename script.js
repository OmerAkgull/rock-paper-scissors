function getComputerChoice() {
  let options = ["rock", "paper", "scissors"];
  let choice = options[Math.floor(Math.random() * options.length)];

  return choice;
}

const computerSelection = getComputerChoice();
const playerSelection = prompt("Rock, paper, or scissors?");
const playerSelectionFixed = playerSelection.toLowerCase();

function playRound(playerSelection, computerSelection) {
  console.log("Player:", playerSelection, "Computer:", computerSelection);

  if ((computerSelection === "paper") & (playerSelection === "rock")) {
    return "You lose! Paper beats rock.";
  } else if (
    (computerSelection === "scissors") &
    (playerSelection === "rock")
  ) {
    return "You win! Rock beats scissors.";
  } else if (
    (computerSelection === "scissors") &
    (playerSelection === "paper")
  ) {
    return "You lose! Scissors beats paper.";
  } else if ((computerSelection === "rock") & (playerSelection === "paper")) {
    return "You win! Paper beats rock.";
  } else if (
    (computerSelection === "rock") &
    (playerSelection === "scissors")
  ) {
    return "You lose! Rock beats scissors.";
  } else if (
    (computerSelection === "paper") &
    (playerSelection === "scissors")
  ) {
    return "You win! Scissors beats paper.";
  } else {
    playRound(playerSelectionFixed, getComputerChoice());
  }
}

playRound(playerSelectionFixed, computerSelection);
