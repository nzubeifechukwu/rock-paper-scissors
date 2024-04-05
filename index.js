const getComputerChoice = () => {
  const possibleChoices = ["rock", "paper", "scissors"];
  return possibleChoices[Math.floor(Math.random() * possibleChoices.length)];
};

const playRound = (playerSelection, computerSelection) => {
  if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock")
  ) {
    console.log(
      `You chose: ${playerSelection}\nComputer chose: ${computerSelection}\n`,
      `You win round! ${playerSelection} beats ${computerSelection}`
    );
    return `win`;
  } else if (
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "rock")
  ) {
    console.log(
      `You chose: ${playerSelection}\nComputer chose: ${computerSelection}\n`,
      `You lose round! ${computerSelection} beats ${playerSelection}`
    );
    return `lose`;
  } else {
    console.log(
      `You chose: ${playerSelection}\nComputer chose: ${computerSelection}\n`,
      `Round is a tie! You both chose ${computerSelection}.`
    );
    return `tie`;
  }
};

const playGame = () => {
  let playerScore = 0;
  let computerScore = 0;
  let playerSelection;
  let computerSelection;
  let roundResult;

  for (let i = 0; i < 5; i++) {
    playerSelection = prompt(
      "Choose between 'rock', 'paper' and 'scissors':"
    ).toLowerCase();
    computerSelection = getComputerChoice();
    roundResult = playRound(playerSelection, computerSelection);

    if (roundResult === "win") {
      playerScore++;
    } else if (roundResult === "lose") {
      computerScore++;
    } else {
      continue;
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
