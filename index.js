const body = document.querySelector("body");

const btnDiv = document.createElement("div");
const introDiv = document.createElement("div");
const resultDiv = document.createElement("div");

const heading = document.createElement("h1");
heading.textContent = "Rock Paper Scissors Game";
introDiv.appendChild(heading);

let round = 1;

const introPara = document.createElement("p");
introPara.textContent = `Round ${round}. Click any of the buttons to make your choice.`;
introDiv.appendChild(introPara);

const btnContents = ["Rock", "Paper", "Scissors"];
btnContents.forEach((content) => {
  const btn = document.createElement("button");
  btn.textContent = content;
  btnDiv.appendChild(btn);
});

body.appendChild(introDiv);
body.appendChild(btnDiv);

const getComputerChoice = () => {
  const possibleChoices = ["rock", "paper", "scissors"];
  return possibleChoices[Math.floor(Math.random() * possibleChoices.length)];
};

const playRound = () => {
  let playerScore = 0;
  let computerScore = 0;
  let result = "";
  let resultPara = "";

  btnDiv.childNodes.forEach((button) => {
    button.addEventListener("click", (e) => {
      const computerChoice = getComputerChoice();
      const playerChoice = e.target.textContent.toLowerCase();
      if (playerChoice === "rock") {
        if (computerChoice === "scissors") {
          resultPara = `<p>You chose: ${playerChoice}<br>Computer chose:
        ${computerChoice}<br>You win round! ${playerChoice} beats ${computerChoice}</p>`;
          playerScore++;
          result = `<p>Your score: ${playerScore}<br>Computer score: ${computerScore}</p>`;
        } else if (computerChoice === "paper") {
          resultPara = `<p>You chose: ${playerChoice}<br>Computer chose:
        ${computerChoice}<br>You lose round! ${computerChoice} beats ${playerChoice}</p>`;
          computerScore++;
          result = `<p>Your score: ${playerScore}<br>Computer score: ${computerScore}</p>`;
        } else {
          resultPara = `<p>You chose: ${playerChoice}<br>Computer chose:
        ${computerChoice}<br>Round is a tie! You both chose ${computerChoice}</p>`;
          result = `<p>Your score: ${playerScore}<br>Computer score: ${computerScore}</p>`;
        }
      } else if (playerChoice === "paper") {
        if (computerChoice === "rock") {
          resultPara = `<p>You chose: ${playerChoice}<br>Computer chose:
        ${computerChoice}<br>You win round! ${playerChoice} beats ${computerChoice}</p>`;
          playerScore++;
          result = `<p>Your score: ${playerScore}<br>Computer score: ${computerScore}</p>`;
        } else if (computerChoice === "scissors") {
          resultPara = `<p>You chose: ${playerChoice}<br>Computer chose:
        ${computerChoice}<br>You lose round! ${computerChoice} beats ${playerChoice}</p>`;
          computerScore++;
          result = `<p>Your score: ${playerScore}<br>Computer score: ${computerScore}</p>`;
        } else {
          resultPara = `<p>You chose: ${playerChoice}<br>Computer chose:
        ${computerChoice}<br>Round is a tie! You both chose ${computerChoice}</p>`;
          result = `<p>Your score: ${playerScore}<br>Computer score: ${computerScore}</p>`;
        }
      } else {
        if (computerChoice === "paper") {
          resultPara = `<p>You chose: ${playerChoice}<br>Computer chose:
        ${computerChoice}<br>You win round! ${playerChoice} beats ${computerChoice}</p>`;
          playerScore++;
          result = `<p>Your score: ${playerScore}<br>Computer score: ${computerScore}</p>`;
        } else if (computerChoice === "rock") {
          resultPara = `<p>You chose: ${playerChoice}<br>Computer chose:
        ${computerChoice}<br>You lose round! ${computerChoice} beats ${playerChoice}</p>`;
          computerScore++;
          result = `<p>Your score: ${playerScore}<br>Computer score: ${computerScore}</p>`;
        } else {
          resultPara = `<p>You chose: ${playerChoice}<br>Computer chose:
        ${computerChoice}<br>Round is a tie! You both chose ${computerChoice}</p>`;
          result = `<p>Your score: ${playerScore}<br>Computer score: ${computerScore}</p>`;
        }
      }

      resultDiv.innerHTML = resultPara + result;
      body.appendChild(resultDiv);

      if (round < 5) {
        round++;
        introPara.textContent = `Round ${round}. Click any of the buttons to make your choice.`;
      } else {
        round = 1;
        if (playerScore > computerScore) {
          resultDiv.innerHTML = resultPara + result + "<p>YOU WIN!!!</p>";
        } else if (playerScore < computerScore) {
          resultDiv.innerHTML = resultPara + result + "<p>YOU LOSE!!!</p>";
        } else {
          resultDiv.innerHTML = resultPara + result + "<p>GAME IS A TIE!!!</p>";
        }
        playerScore = 0;
        computerScore = 0;
        introPara.innerHTML = `PLAY AGAIN<br>Round ${round}. Click any of the buttons to make your choice.`;
      }
    });
  });
};

playRound();
