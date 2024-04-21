const body = document.querySelector("body");

const btnDiv = document.createElement("div");
const textDiv = document.createElement("div");

const heading = document.createElement("h1");
heading.textContent = "Rock Paper Scissors Game";
textDiv.appendChild(heading);

const para = document.createElement("p");
para.textContent = "Click any of the buttons to make your choice";
textDiv.appendChild(para);

const rockBtn = document.createElement("button");
rockBtn.textContent = "Rock";
btnDiv.appendChild(rockBtn);

const paperBtn = document.createElement("button");
paperBtn.textContent = "Paper";
btnDiv.appendChild(paperBtn);

const scissorsBtn = document.createElement("button");
scissorsBtn.textContent = "Scissors";
btnDiv.appendChild(scissorsBtn);

body.appendChild(textDiv);
body.appendChild(btnDiv);

let choiceText = "";

const playRound = (/* playerSelection, computerSelection */) => {
  rockBtn.addEventListener("click", (e) => {
    let computerChoice = getComputerChoice();
    if (computerChoice === "scissors") {
      choiceText = `You chose: ${e.target.textContent.toLowerCase()}\nComputer chose: ${computerChoice}\nYou win round! ${e.target.textContent.toLowerCase()} beats ${computerChoice}`;
      return "win";
    } else if (computerChoice === "paper") {
      choiceText = `You chose: ${e.target.textContent.toLowerCase()}\nComputer chose: ${computerChoice}\nYou win round! ${e.target.textContent.toLowerCase()} beats ${computerChoice}`;
      return "lose";
    } else {
      choiceText = `You chose: ${e.target.textContent.toLowerCase()}\nComputer chose: ${computerChoice}\nRound is a tie! You both chose ${computerSelection}`;
      return "tie";
    }
  });

  paperBtn.addEventListener("click", (e) => {
    let computerChoice = getComputerChoice();
    if (computerChoice === "rock") {
      choiceText = `You chose: ${e.target.textContent.toLowerCase()}\nComputer chose: ${computerChoice}\nYou win round! ${e.target.textContent.toLowerCase()} beats ${computerChoice}`;
      return "win";
    } else if (computerChoice === "scissors") {
      choiceText = `You chose: ${e.target.textContent.toLowerCase()}\nComputer chose: ${computerChoice}\nYou win round! ${e.target.textContent.toLowerCase()} beats ${computerChoice}`;
      return "lose";
    } else {
      choiceText = `You chose: ${e.target.textContent.toLowerCase()}\nComputer chose: ${computerChoice}\nRound is a tie! You both chose ${computerSelection}`;
      return "tie";
    }
  });

  scissorsBtn.addEventListener("click", (e) => {
    let computerChoice = getComputerChoice();
    if (computerChoice === "paper") {
      choiceText = `You chose: ${e.target.textContent.toLowerCase()}\nComputer chose: ${computerChoice}\nYou win round! ${e.target.textContent.toLowerCase()} beats ${computerChoice}`;
      return "win";
    } else if (computerChoice === "rock") {
      choiceText = `You chose: ${e.target.textContent.toLowerCase()}\nComputer chose: ${computerChoice}\nYou win round! ${e.target.textContent.toLowerCase()} beats ${computerChoice}`;
      return "lose";
    } else {
      choiceText = `You chose: ${e.target.textContent.toLowerCase()}\nComputer chose: ${computerChoice}\nRound is a tie! You both chose ${computerSelection}`;
      return "tie";
    }
  });
};

const getComputerChoice = () => {
  const possibleChoices = ["rock", "paper", "scissors"];
  return possibleChoices[Math.floor(Math.random() * possibleChoices.length)];
};

// const playRound = (playerSelection, computerSelection) => {
//   if (
//     (playerSelection === "rock" && computerSelection === "scissors") ||
//     (playerSelection === "scissors" && computerSelection === "paper") ||
//     (playerSelection === "paper" && computerSelection === "rock")
//   ) {
//     console.log(
//       `You chose: ${playerSelection}\nComputer chose: ${computerSelection}\n`,
//       `You win round! ${playerSelection} beats ${computerSelection}`
//     );
//     return `win`;
//   } else if (
//     (playerSelection === "rock" && computerSelection === "paper") ||
//     (playerSelection === "paper" && computerSelection === "scissors") ||
//     (playerSelection === "scissors" && computerSelection === "rock")
//   ) {
//     console.log(
//       `You chose: ${playerSelection}\nComputer chose: ${computerSelection}\n`,
//       `You lose round! ${computerSelection} beats ${playerSelection}`
//     );
//     return `lose`;
//   } else {
//     console.log(
//       `You chose: ${playerSelection}\nComputer chose: ${computerSelection}\n`,
//       `Round is a tie! You both chose ${computerSelection}.`
//     );
//     return `tie`;
//   }
// };

const playGame = () => {
  let playerScore = 0;
  let computerScore = 0;
  let playerSelection;
  let computerSelection;
  let roundResult;

  // for (let i = 0; i < 5; i++) {
  // playerSelection = prompt(
  ("Choose between 'rock', 'paper' and 'scissors':");
  // ).toLowerCase();
  computerSelection = getComputerChoice();
  roundResult = playRound(playerSelection, computerSelection);

  if (roundResult === "win") {
    playerScore++;
  } else if (roundResult === "lose") {
    computerScore++;
    // } else {
    //   continue;
    // }
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
