const getComputerChoice = () => {
  const possibleChoices = ["rock", "paper", "scissors"];
  return possibleChoices[Math.floor(Math.random() * possibleChoices.length)];
};

const playRound = (playerSelection, computerSelection) => {
  if (playerSelection === computerSelection) {
    console.log(
      `You chose: ${playerSelection}\nComputer chose: ${computerSelection}\n`,
      `Round is a tie! You both chose ${computerSelection}.`
    );
    return `tie`;
  }
  if (playerSelection === "rock" && computerSelection === "scissors") {
    console.log(
      `You chose: ${playerSelection}\nComputer chose: ${computerSelection}\n`,
      `You win round! ${playerSelection} beats ${computerSelection}`
    );
    return `win`;
  }
  if (playerSelection === "scissors" && computerSelection === "paper") {
    console.log(
      `You chose: ${playerSelection}\nComputer chose: ${computerSelection}\n`,
      `You win round! ${playerSelection} beats ${computerSelection}`
    );
    return `win`;
  }
  if (playerSelection === "paper" && computerSelection === "rock") {
    console.log(
      `You chose: ${playerSelection}\nComputer chose: ${computerSelection}\n`,
      `You win round! ${playerSelection} beats ${computerSelection}`
    );
    return `win`;
  }
  if (playerSelection === "rock" && computerSelection === "paper") {
    console.log(
      `You chose: ${playerSelection}\nComputer chose: ${computerSelection}\n`,
      `You lose round! ${computerSelection} beats ${playerSelection}`
    );
    return `lose`;
  }
  if (playerSelection === "paper" && computerSelection === "scissors") {
    console.log(
      `You chose: ${playerSelection}\nComputer chose: ${computerSelection}\n`,
      `You lose round! ${computerSelection} beats ${playerSelection}`
    );
    return `lose`;
  }
  if (playerSelection === "scissors" && computerSelection === "rock") {
    console.log(
      `You chose: ${playerSelection}\nComputer chose: ${computerSelection}\n`,
      `You lose round! ${computerSelection}  beats ${playerSelection}`
    );
    return `lose`;
  }
};

const playGame = () => {
  let playerScore = 0;
  let computerScore = 0;
  let playerSelection;
  let computerSelection;

  for (let i = 0; i < 5; i++) {
    playerSelection = prompt(
      "Choose between 'rock', 'paper' and 'scissors':"
    ).toLowerCase();
    computerSelection = getComputerChoice();

    if (playRound(playerSelection, computerSelection).includes("win")) {
      playerScore++;
    } else if (playRound(playerSelection, computerSelection).includes("lose")) {
      computerScore++;
    }
  }

  if (playerScore === computerScore) {
    return `Your score: ${playerScore}\nComputer score: ${computerScore}\n\nGAME IS A TIE!!!`;
  } else if (playerScore > computerScore) {
    return `Your score: ${playerScore}\nComputer score: ${computerScore}\n\nYOU WIN!!!`;
  } else {
    return `Your score: ${playerScore}\nComputer score: ${computerScore}\n\nYOU LOSE!!!`;
  }
};

console.log(playGame());
