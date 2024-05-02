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
  let playerScore = 0;
  let computerScore = 0;
  let result = "";
  let resultPara = "";

  rockBtn.addEventListener("click", (e) => {
    const computerChoice = getComputerChoice();

    if (computerChoice === "scissors") {
      resultPara = `<p>You chose: ${e.target.textContent.toLowerCase()}<br>Computer chose: 
        ${computerChoice}<br>You win round! ${e.target.textContent.toLowerCase()} beats ${computerChoice}<br></p>`;
      playerScore++;
      result = `<p>Your score: ${playerScore}<br>Computer score: ${computerScore}</p><br>`;
    } else if (computerChoice === "paper") {
      resultPara = `<p>You chose: ${e.target.textContent.toLowerCase()}<br>Computer chose: 
        ${computerChoice}<br>You lose round! ${computerChoice} beats ${e.target.textContent.toLowerCase()}<br></p>`;
      computerScore++;
      result = `<p>Your score: ${playerScore}<br>Computer score: ${computerScore}</p><br>`;
    } else {
      resultPara = `<p>You chose: ${e.target.textContent.toLowerCase()}<br>Computer chose: 
        ${computerChoice}<br>Round is a tie! You both chose ${computerChoice}<br></p>`;
      result = `<p>Your score: ${playerScore}<br>Computer score: ${computerScore}</p><br>`;
    }

    resultDiv.innerHTML = resultPara + result;
    body.appendChild(resultDiv);

    if (round < 5) {
      round++;
      introPara.textContent = `Round ${round}. Click any of the buttons to make your choice.`;
    } else {
      round = 1;
      if (playerScore > computerScore) {
        resultDiv.innerHTML = "";
        resultDiv.innerHTML = result + "<br>YOU WIN!!!";
      } else if (playerScore < computerScore) {
        resultDiv.innerHTML = "";
        resultDiv.innerHTML = result + "<br>YOU LOSE!!!";
      } else {
        resultDiv.innerHTML = "";
        resultDiv.innerHTML = result + "<br>GAME IS A TIE!!!";
      }
      playerScore = 0;
      computerScore = 0;
      introPara.textContent = "";
      introPara.innerHTML = `PLAY AGAIN<br>Round ${round}. Click any of the buttons to make your choice.`;
    }
  });

  paperBtn.addEventListener("click", (e) => {
    const computerChoice = getComputerChoice();

    if (computerChoice === "rock") {
      resultPara = `<p>You chose: ${e.target.textContent.toLowerCase()}<br>Computer chose: 
        ${computerChoice}<br>You win round! ${e.target.textContent.toLowerCase()} beats ${computerChoice}<br></p>`;
      playerScore++;
      result = `<p>Your score: ${playerScore}<br>Computer score: ${computerScore}</p><br>`;
    } else if (computerChoice === "scissors") {
      resultPara = `<p>You chose: ${e.target.textContent.toLowerCase()}<br>Computer chose: 
        ${computerChoice}<br>You lose round! ${computerChoice} beats ${e.target.textContent.toLowerCase()}<br></p>`;
      computerScore++;
      result = `<p>Your score: ${playerScore}<br>Computer score: ${computerScore}</p><br>`;
    } else {
      resultPara = `<p>You chose: ${e.target.textContent.toLowerCase()}<br>Computer chose: 
        ${computerChoice}<br>Round is a tie! You both chose ${computerChoice}<br></p>`;
      result = `<p>Your score: ${playerScore}<br>Computer score: ${computerScore}</p><br>`;
    }

    resultDiv.innerHTML = resultPara + result;
    body.appendChild(resultDiv);

    if (round < 5) {
      round++;
      introPara.textContent = `Round ${round}. Click any of the buttons to make your choice.`;
    } else {
      round = 1;
      if (playerScore > computerScore) {
        resultDiv.innerHTML = "";
        resultDiv.innerHTML = result + "<br>YOU WIN!!!";
      } else if (playerScore < computerScore) {
        resultDiv.innerHTML = "";
        resultDiv.innerHTML = result + "<br>YOU LOSE!!!";
      } else {
        resultDiv.innerHTML = "";
        resultDiv.innerHTML = result + "<br>GAME IS A TIE!!!";
      }
      playerScore = 0;
      computerScore = 0;
      introPara.textContent = "";
      introPara.innerHTML = `PLAY AGAIN<br>Round ${round}. Click any of the buttons to make your choice.`;
    }
  });

  scissorsBtn.addEventListener("click", (e) => {
    const computerChoice = getComputerChoice();

    if (computerChoice === "paper") {
      resultPara = `<p>You chose: ${e.target.textContent.toLowerCase()}<br>Computer chose: 
        ${computerChoice}<br>You win round! ${e.target.textContent.toLowerCase()} beats ${computerChoice}<br></p>`;
      playerScore++;
      result = `<p>Your score: ${playerScore}<br>Computer score: ${computerScore}</p><br>`;
    } else if (computerChoice === "rock") {
      resultPara = `<p>You chose: ${e.target.textContent.toLowerCase()}<br>Computer chose: 
        ${computerChoice}<br>You lose round! ${computerChoice} beats ${e.target.textContent.toLowerCase()}<br></p>`;
      computerScore++;
      result = `<p>Your score: ${playerScore}<br>Computer score: ${computerScore}</p><br>`;
    } else {
      resultPara = `<p>You chose: ${e.target.textContent.toLowerCase()}<br>Computer chose: 
        ${computerChoice}<br>Round is a tie! You both chose ${computerChoice}<br></p>`;
      result = `<p>Your score: ${playerScore}<br>Computer score: ${computerScore}</p><br>`;
    }

    resultDiv.innerHTML = resultPara + result;
    body.appendChild(resultDiv);

    if (round < 5) {
      round++;
      introPara.textContent = `Round ${round}. Click any of the buttons to make your choice.`;
    } else {
      round = 1;
      if (playerScore > computerScore) {
        resultDiv.innerHTML = "";
        resultDiv.innerHTML = result + "<br>YOU WIN!!!";
      } else if (playerScore < computerScore) {
        resultDiv.innerHTML = "";
        resultDiv.innerHTML = result + "<br>YOU LOSE!!!";
      } else {
        resultDiv.innerHTML = "";
        resultDiv.innerHTML = result + "<br>GAME IS A TIE!!!";
      }
      playerScore = 0;
      computerScore = 0;
      introPara.textContent = "";
      introPara.innerHTML = `PLAY AGAIN<br>Round ${round}. Click any of the buttons to make your choice.`;
    }
  });
};

playRound();
