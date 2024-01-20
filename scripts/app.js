
let pRock = document.getElementById("pRock");
let pPaper = document.getElementById("pPaper");
let pScissor = document.getElementById("pScissor");
let pLizard = document.getElementById("pLizard");
let pSpock = document.getElementById("pSpock");

let bo1 = document.getElementById("bo1");
let bo5 = document.getElementById("bo5");
let bo7 = document.getElementById("bo7");

let subBtn = document.getElementById("subBtn");




let userInput = document.getElementById("userChoice");
let userScore = document.getElementById("userScore");
let CPUScore = document.getElementById("CPUScore");
let result;
let choices = ["rock", "paper", "scissor", "lizard", "spock"];
let endResult = document.getElementById("endResult");

let UserScore = 0;
let ComputerScore = 0;

CPUScore.textContent = `Computer Score: ${ComputerScore}`;
userScore.textContent = `Your Score: ${UserScore}`;

const APICall = async () => {
    const promise = await fetch(
      "https://jessierpslsapi.azurewebsites.net/api/RPSLS/RandomCpuChoice"
    );
    result = await promise.text();
    console.log(result);
  };
  APICall();
  userInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      PlayGame(userInput.value);
      userInput.value = "";
    }
  });

  const PlayGame = (x) => {
    x = x.toLowerCase();
    result = result.toLowerCase();
  
    if (choices.includes(x)) {
      switch (x) {
        case "scissor":
          Scissor(result);
          break;
        case "paper":
          Paper(result);
          break;
        case "rock":
          Rock(result);
          break;
        case "lizard":
          Lizard(result);
          break;  
        case "spock":
          Spock(result);
          break;
      }
    } else {
      endResult.textContent =
        "That's not an option. Please pick a vaild option.";
    }
  };

  const Rock = (ComputerChoice) => {
    if ("rock" == ComputerChoice) {
      endResult.textContent = "You tied";
    } else if (ComputerChoice == "paper" || ComputerChoice == "spock") {
      endResult.textContent = "You lose";
      ComputerScore++;
      CPUScore.textContent = `Computer Score: ${ComputerScore}`;
    } else {
      endResult.textContent = "You win!";
      UserScore++;
      userScore.textContent = `Your Score: ${UserScore}`;
    }
  };

  const Paper = (ComputerChoice) => {
    if ("paper" == ComputerChoice) {
      endResult.textContent = "You tied";
    } else if (ComputerChoice == "scissor" || ComputerChoice == "lizard") {
      endResult.textContent = "You lose";
      ComputerScore++;
      CPUScore.textContent = `Computer Score: ${ComputerScore}`;
    } else {
      endResult.textContent = "You win!";
      UserScore++;
      userScore.textContent = `Your Score: ${UserScore}`;
    }
  };

  const Scissor = (ComputerChoice) => {
    if ("scissor" == ComputerChoice) {
      endResult.textContent = "You tied";
    } else if (ComputerChoice == "rock" || ComputerChoice == "spock") {
      endResult.textContent = "You lose";
      ComputerScore++;
      CPUScore.textContent = `Computer Score: ${ComputerScore}`;
    } else {
      endResult.textContent = "You win!";
      UserScore++;
      userScore.textContent = `Your Score: ${UserScore}`;
    }
  };

  const Lizard = (ComputerChoice) => {
    if ("lizard" == ComputerChoice) {
      endResult.textContent = "You tied";
    } else if (ComputerChoice == "rock" || ComputerChoice == "scissor") {
      endResult.textContent = "You lose";
      ComputerScore++;
      CPUScore.textContent = `Computer Score: ${ComputerScore}`;
    } else {
      endResult.textContent = "You win!";
      UserScore++;
      userScore.textContent = `Your Score: ${UserScore}`;
    }
  };

  const Spock = (ComputerChoice) => {
    if ("spock" == ComputerChoice) {
      endResult.textContent = "You tied";
    } else if (ComputerChoice == "paper" || ComputerChoice == "lizard") {
      endResult.textContent = "You lose";
      ComputerScore++;
      CPUScore.textContent = `Computer Score: ${ComputerScore}`;
    } else {
      endResult.textContent = "You win!";
      UserScore++;
      userScore.textContent = `Your Score: ${UserScore}`;
    }
  };