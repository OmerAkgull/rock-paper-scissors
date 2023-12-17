function getComputerChoice() {
  let options = ["rock", "paper", "scissors"];
  let choice = options[Math.floor(Math.random() * options.length)];

  return choice;
}

const rock = document.querySelector("#btnRock");
const paper = document.querySelector("#btnPaper");
const scissors = document.querySelector("#btnScissors");

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
  console.log("Player:", playerSelection, "Computer:", computerSelection);

  const winMessage = `You win! ${playerSelection} beats ${computerSelection}`;
  const loseMessage = `You lose! ${computerSelection} beats ${playerSelection}`;
  const tieMessage = "It's a tie, go again!";

  if (playerSelection === computerSelection) {
    console.log(tieMessage);
    // playerSelectionPrompt = prompt("Rock, paper, or scissors?");
    // playRound(playerSelectionPrompt, getComputerChoice());
  } else if (playerSelection === "rock") {
    if (computerSelection === "paper") {
      console.log(loseMessage);
      computerScore++;
    } else {
      console.log(winMessage);
      playerScore++;
    }
  } else if (playerSelection === "paper") {
    if (computerSelection === "scissors") {
      console.log(loseMessage);
      computerScore++;
    } else {
      console.log(winMessage);
      playerScore++;
    }
  } else {
    if (computerSelection === "rock") {
      console.log(loseMessage);
      computerScore++;
    } else {
      console.log(winMessage);
      playerScore++;
    }
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

const refreshButton = document.querySelector("#playAgain");
refreshButton.addEventListener("click", refreshPage);


/*
function game() {
  for (let i = 0; i < 5; i++) {
    if (playerScore === 3 || computerScore === 3){
      break;
     }
    let playerSelectionPrompt = prompt("Rock, paper, or scissors?");   
    playRound(playerSelectionPrompt, getComputerChoice());
  }
  if (playerScore > computerScore) {
    console.log(
      `You win this best of 5 with a score of ${playerScore} - ${computerScore}! Congrats!`
    );
  } else {
    console.log(
      "You lose this best of 5 with a score of " +
        computerScore +
        " -" +
        playerScore +
        " ! Try again!"
    );
  }
}

game();

*/
