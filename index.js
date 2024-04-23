const body = document.querySelector("body");

const btnDiv = document.createElement("div");
const introDiv = document.createElement("div");
const resultDiv = document.createElement("div");

const heading = document.createElement("h1");
heading.textContent = "Rock Paper Scissors Game";
introDiv.appendChild(heading);

const introPara = document.createElement("p");
introPara.textContent = "Click any of the buttons to make your choice";
introDiv.appendChild(introPara);

const rockBtn = document.createElement("button");
rockBtn.textContent = "Rock";
btnDiv.appendChild(rockBtn);

const paperBtn = document.createElement("button");
paperBtn.textContent = "Paper";
btnDiv.appendChild(paperBtn);

const scissorsBtn = document.createElement("button");
scissorsBtn.textContent = "Scissors";
btnDiv.appendChild(scissorsBtn);

body.appendChild(introDiv);
body.appendChild(btnDiv);

const getComputerChoice = () => {
  const possibleChoices = ["rock", "paper", "scissors"];
  return possibleChoices[Math.floor(Math.random() * possibleChoices.length)];
};

const playRound = () => {
  let resultPara = "";

  rockBtn.addEventListener("click", (e) => {
    const computerChoice = getComputerChoice();

    if (computerChoice === "scissors") {
      resultPara += `<p>You chose: ${e.target.textContent.toLowerCase()}<br>Computer chose: 
        ${computerChoice}<br>You win round! ${e.target.textContent.toLowerCase()} beats ${computerChoice}<br></p>`;
    } else if (computerChoice === "paper") {
      resultPara += `<p>You chose: ${e.target.textContent.toLowerCase()}<br>Computer chose: 
        ${computerChoice}<br>You lose round! ${computerChoice} beats ${e.target.textContent.toLowerCase()}<br></p>`;
    } else {
      resultPara += `<p>You chose: ${e.target.textContent.toLowerCase()}<br>Computer chose: 
        ${computerChoice}<br>Round is a tie! You both chose ${computerChoice}<br></p>`;
    }

    resultDiv.innerHTML = resultPara;
    body.appendChild(resultDiv);

    return resultPara;
  });

  paperBtn.addEventListener("click", (e) => {
    const computerChoice = getComputerChoice();

    if (computerChoice === "rock") {
      resultPara += `<p>You chose: ${e.target.textContent.toLowerCase()}<br>Computer chose: 
        ${computerChoice}<br>You win round! ${e.target.textContent.toLowerCase()} beats ${computerChoice}<br></p>`;
    } else if (computerChoice === "scissors") {
      resultPara += `<p>You chose: ${e.target.textContent.toLowerCase()}<br>Computer chose: 
        ${computerChoice}<br>You lose round! ${computerChoice} beats ${e.target.textContent.toLowerCase()}<br></p>`;
    } else {
      resultPara += `<p>You chose: ${e.target.textContent.toLowerCase()}<br>Computer chose: 
        ${computerChoice}<br>Round is a tie! You both chose ${computerChoice}<br></p>`;
    }

    resultDiv.innerHTML = resultPara;
    body.appendChild(resultDiv);

    return resultPara;
  });

  scissorsBtn.addEventListener("click", (e) => {
    const computerChoice = getComputerChoice();

    if (computerChoice === "paper") {
      resultPara += `<p>You chose: ${e.target.textContent.toLowerCase()}<br>Computer chose: 
        ${computerChoice}<br>You win round! ${e.target.textContent.toLowerCase()} beats ${computerChoice}<br></p>`;
    } else if (computerChoice === "rock") {
      resultPara += `<p>You chose: ${e.target.textContent.toLowerCase()}<br>Computer chose: 
        ${computerChoice}<br>You lose round! ${computerChoice} beats ${e.target.textContent.toLowerCase()}<br></p>`;
    } else {
      resultPara += `<p>You chose: ${e.target.textContent.toLowerCase()}<br>Computer chose: 
        ${computerChoice}<br>Round is a tie! You both chose ${computerChoice}<br></p>`;
    }

    resultDiv.innerHTML = resultPara;
    body.appendChild(resultDiv);

    return resultPara;
  });
};

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

playRound();
