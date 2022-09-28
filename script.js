const myArray = ["Rock", "Paper", "Scissors"];

function getComputerChoice(){
    return myArray[Math.floor(Math.random() * myArray.length)];
}
function game(){
    let playerScore = 0;
    let computerScore = 0;

    function playRound(playerSelection, computerSelection){
        playerSelection = playerSelection.toLowerCase();
        computerSelection = computerSelection.toLowerCase();
        if (playerSelection == computerSelection){
            return "It's a draw!";
        }
        else if (playerSelection == "rock"){
            if (computerSelection == "paper"){
                computerScore++;
                return "You lose! Paper beats rock";
            }
            else{
                playerScore++;
                return "You win! Rock beats scissors!";
            }
        }
        else if (playerSelection == "paper"){
            if (computerSelection == "scissors"){
                computerScore++;
                return "You lose! Scissors beats Paper";
            }
            else{
                playerScore++;
                return "You win! Paper beats rock";
            }
        }
        else if (playerSelection == "scissors"){
            if (computerSelection == "rock"){
                computerScore++;
                return "You lose! Rock beats scissors";
            }
            else{
                playerScore++;
                return "You win! Scissors beats paper";
            }
        }
    }
    return playRound;
}

const playRound = game()

playerSelection = "Rock";
computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));
