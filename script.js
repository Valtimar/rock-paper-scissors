const myArray = ["Rock", "Paper", "Scissors"];

COMPUTERCHOICE = document.getElementById("computerchoice");
BUTTONS = document.getElementsByClassName("buttons")
BUTTON1 = document.getElementById("button1")
BUTTON2 = document.getElementById("button2")
BUTTON3 = document.getElementById("button3")
WIN = document.getElementById("result-win")
PLAYERSCORE = document.getElementById("playerscore")
COMPUTERSCORE = document.getElementById("computerscore")

function getComputerChoice(){
    return myArray[Math.floor(Math.random() * myArray.length)];
}
function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    function points(){
        let playerScore = 0;
        let computerScore = 0;
        if (playerSelection == computerSelection){
            WIN.innerHTML = "Draw"
        }
        else if (playerSelection == "rock"){
            if (computerSelection == "paper"){
                computerScore++;
                COMPUTERSCORE.innerHTML = "Computer score: " + `${computerScore}`;
                WIN.innerHTML = "Computer"
            }
            else{
                playerScore++;
                PLAYERSCORE.innerHTML = "Player score: " + `${playerScore}`;
                WIN.innerHTML = "Player"
            }
        }
        else if (playerSelection == "paper"){
            if (computerSelection == "scissors"){
                computerScore++;
                COMPUTERSCORE.innerHTML = "Computer score: " + `${computerScore}`;
                WIN.innerHTML = "Computer"
            }
            else{
                playerScore++;
                PLAYERSCORE.innerHTML = "Player score: " + `${playerScore}`;
                WIN.innerHTML = "Player"
            }
        }
        else if (playerSelection == "scissors"){
            if (computerSelection == "rock"){
                computerScore++;
                COMPUTERSCORE.innerHTML = "Computer score: " + `${computerScore}`;
                WIN.innerHTML = "Computer"
            }
             else{
                playerScore++;
                PLAYERSCORE.innerHTML = "Player score: " + `${playerScore}`;
                WIN.innerHTML = "Player"
            }
        }
    }
    return points;
}


function showComputerChoice(){
    COMPUTERCHOICE.innerHTML = "Computer has chosen: " + getComputerChoice();
}
computerSelection = getComputerChoice();

for(let i = 0; i < BUTTONS.length; i++){
    BUTTONS[i].addEventListener("click", showComputerChoice)
}



