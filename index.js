const body = document.querySelector("body");

const btnDiv = document.createElement("div");
const introDiv = document.createElement("div");
const resultDiv = document.createElement("div");

const heading = document.createElement("h1");
heading.textContent = "Rock Paper Scissors Game";
introDiv.appendChild(heading);

let round = 1;

const introPara = document.createElement("p");
introPara.innerHTML = `<strong>ROUND ${round}</strong><br>Click any of the buttons to make your choice.`;
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
          resultPara = `<p>You chose ${playerChoice}<br>Computer chose
        ${computerChoice}<br>You win round! ${playerChoice} beats ${computerChoice}</p>`;
          playerScore++;
          result = `<strong><p>Your score: ${playerScore}<br>Computer score: ${computerScore}</p></strong>`;
        } else if (computerChoice === "paper") {
          resultPara = `<p>You chose ${playerChoice}<br>Computer chose
        ${computerChoice}<br>You lose round! ${computerChoice} beats ${playerChoice}</p>`;
          computerScore++;
          result = `<strong><p>Your score: ${playerScore}<br>Computer score: ${computerScore}</p></strong>`;
        } else {
          resultPara = `<p>You chose ${playerChoice}<br>Computer chose
        ${computerChoice}<br>Round is a tie! You both chose ${computerChoice}</p>`;
          result = `<strong><p>Your score: ${playerScore}<br>Computer score: ${computerScore}</p></strong>`;
        }
      } else if (playerChoice === "paper") {
        if (computerChoice === "rock") {
          resultPara = `<p>You chose ${playerChoice}<br>Computer chose
        ${computerChoice}<br>You win round! ${playerChoice} beats ${computerChoice}</p>`;
          playerScore++;
          result = `<strong><p>Your score: ${playerScore}<br>Computer score: ${computerScore}</p></strong>`;
        } else if (computerChoice === "scissors") {
          resultPara = `<p>You chose ${playerChoice}<br>Computer chose
        ${computerChoice}<br>You lose round! ${computerChoice} beats ${playerChoice}</p>`;
          computerScore++;
          result = `<strong><p>Your score: ${playerScore}<br>Computer score: ${computerScore}</p></strong>`;
        } else {
          resultPara = `<p>You chose ${playerChoice}<br>Computer chose
        ${computerChoice}<br>Round is a tie! You both chose ${computerChoice}</p>`;
          result = `<strong><p>Your score: ${playerScore}<br>Computer score: ${computerScore}</p></strong>`;
        }
      } else {
        if (computerChoice === "paper") {
          resultPara = `<p>You chose ${playerChoice}<br>Computer chose
        ${computerChoice}<br>You win round! ${playerChoice} beats ${computerChoice}</p>`;
          playerScore++;
          result = `<strong><p>Your score: ${playerScore}<br>Computer score: ${computerScore}</p></strong>`;
        } else if (computerChoice === "rock") {
          resultPara = `<p>You chose ${playerChoice}<br>Computer chose
        ${computerChoice}<br>You lose round! ${computerChoice} beats ${playerChoice}</p>`;
          computerScore++;
          result = `<strong><p>Your score: ${playerScore}<br>Computer score: ${computerScore}</p></strong>`;
        } else {
          resultPara = `<p>You chose ${playerChoice}<br>Computer chose
        ${computerChoice}<br>Round is a tie! You both chose ${computerChoice}</p>`;
          result = `<strong><p>Your score: ${playerScore}<br>Computer score: ${computerScore}</p></strong>`;
        }
      }

      resultDiv.innerHTML = resultPara + result;
      body.appendChild(resultDiv);

      if (round < 5) {
        round++;
        introPara.innerHTML = `<strong>ROUND ${round}</strong><br>Click any of the buttons to make your choice.`;
      } else {
        round = 1;
        if (playerScore > computerScore) {
          resultDiv.innerHTML =
            resultPara + result + "<p><strong>YOU WIN!!!</strong></p>";
        } else if (playerScore < computerScore) {
          resultDiv.innerHTML =
            resultPara + result + "<p><strong>YOU LOSE!!!</strong></p>";
        } else {
          resultDiv.innerHTML =
            resultPara + result + "<p><strong>GAME IS A TIE!!!</strong></p>";
        }
        playerScore = 0;
        computerScore = 0;
        introPara.innerHTML = `<strong>PLAY AGAIN<br><br>ROUND ${round}</strong><br>Click any of the buttons to make your choice.`;
      }
    });
  });
};

playRound();
