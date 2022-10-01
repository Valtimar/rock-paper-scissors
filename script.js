const myArray = ["Rock", "Paper", "Scissors"];

function getComputerChoice(){
    return myArray[Math.floor(Math.random() * myArray.length)];
}
function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if (playerSelection == computerSelection){
        return "It's a draw!";
    }
    else if (playerSelection == "rock"){
        if (computerSelection == "paper"){
            return "You lose! Paper beats rock";
        }
        else{
            return "You win! Rock beats scissors!";
        }
    }
    else if (playerSelection == "paper"){
        if (computerSelection == "scissors"){
            return "You lose! Scissors beats Paper";
        }
        else{
            return "You win! Paper beats rock";
        }
    }
    else if (playerSelection == "scissors"){
        if (computerSelection == "rock"){
            return "You lose! Rock beats scissors";
        }
         else{
            return "You win! Scissors beats paper";
        }
    }
}

playerSelection = "Rock";
computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));
