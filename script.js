function getComputerChoice() {
  let options = ["rock", "paper", "scissors"];
  let choice = options[Math.floor(Math.random() * options.length)];

  return choice;
}

const rock = document.querySelector("#btnRock");
const paper = document.querySelector("#btnPaper");
const scissors = document.querySelector("#btnScissors");
const gameEnd = document.querySelector(".gameEnd");
const winnerText = document.querySelector(".winner");
const buttonEnd = document.querySelector(".buttonEnd");

let playerScore = 0;
let computerScore = 0;

let playerScoreBox = document.querySelector("#playerScore");
let computerScoreBox = document.querySelector("#computerScore");

let results = document.querySelector(".result-box");

function playRound(playerSelection, computerSelection) {
  console.log("Player:", playerSelection, "Computer:", computerSelection);

  const winMessage = `You win! ${playerSelection} beats ${computerSelection}`;
  const loseMessage = `You lose! ${computerSelection} beats ${playerSelection}`;
  const tieMessage = "It's a tie, go again!";

  if (playerSelection === computerSelection) {
    results.textContent = tieMessage;
  } else if (playerSelection === "rock") {
    if (computerSelection === "paper") {
      results.textContent = loseMessage;
      computerScore++;
    } else {
      results.textContent = winMessage;
      playerScore++;
    }
  } else if (playerSelection === "paper") {
    if (computerSelection === "scissors") {
      results.textContent = loseMessage;
      computerScore++;
    } else {
      results.textContent = winMessage;
      playerScore++;
    }
  } else {
    if (computerSelection === "rock") {
      results.textContent = loseMessage;
      computerScore++;
    } else {
      results.textContent = winMessage;
      playerScore++;
    }
  }
  if (playerScore === 5 || computerScore === 5) {
    if (playerScore > computerScore) {
      results.textContent = `You win this round with a score of ${playerScore} - ${computerScore}! Congrats!`;
    } else {
      results.textContent =
        "You lose this best of 5 with a score of " +
        computerScore +
        " -" +
        playerScore +
        " ! Try again!";
    }
  }
  playerScoreBox.textContent = playerScore;
  computerScoreBox.textContent = computerScore;
  if (playerScore === 5 || computerScore === 5) {
    gameEnd.style.display = "flex";
    winnerText.textContent =
      playerScore === 5 ? "Player Wins! Congratulations!" : "Computer Wins! You can try again!";
    body;
  }
}

paper.addEventListener("click", () => {
  playRound("paper", getComputerChoice());
});

rock.addEventListener("click", () => {
  playRound("rock", getComputerChoice());
});

scissors.addEventListener("click", () => {
  playRound("scissors", getComputerChoice());
});

const refreshPage = () => {
  location.reload();
};

buttonEnd.addEventListener("click", refreshPage);

