// 1. Use Strict Mode
'use strict';

// 2. Global Variables and Constants
let playerWins = 0;
let computerWins = 0;

// 3. Functions
function getComputerChoice(){
    /* Randomly return either rock, paper or scissors */
    let index = Math.floor(Math.random()*3);
    if (index == 0){
        return "rock";
    }
    else if (index == 1){
        return "paper";
    }
    else {
        return "scissors";
    }
}

function playRound(playerSelection){
    /* Play a single round of the game */
    const outputDiv = document.getElementById("output");
    const paragraph = document.createElement("p");
    const playerScore = document.getElementById("playerWins");
    const computerScore = document.getElementById("computerWins");
    let message = "";
    let computerSelection = getComputerChoice();

    if ((computerSelection == "rock" && playerSelection == "rock") || (computerSelection == "paper" && playerSelection == "paper") || (computerSelection == "scissors" && playerSelection == "scissors")){
        message = "¡It's a Tie! Both were " + computerSelection;
        paragraph.textContent = message;
        outputDiv.appendChild(paragraph);
        playerWins++;
        playerScore.textContent = playerWins;
        computerWins++;
        computerScore.textContent = computerWins;
    } else if ((computerSelection == "paper" && playerSelection == "rock") || (computerSelection == "rock" && playerSelection == "scissors") || (computerSelection == "scissors" && playerSelection == "paper")){
        message = "¡You Lose! " + computerSelection + " over " + playerSelection;
        paragraph.textContent = message;
        outputDiv.appendChild(paragraph);
        computerWins++;
        computerScore.textContent = computerWins;
    } else {
        message = "¡You Win! " + playerSelection + " over " + computerSelection;
        paragraph.textContent = message;
        outputDiv.appendChild(paragraph);
        playerWins++;
        playerScore.textContent = playerWins;
    }
}

// 4. Event Listeners
document.addEventListener('DOMContentLoaded', function(){
    const button1 = document.getElementById('rock');
    const button2 = document.getElementById('paper');
    const button3 = document.getElementById('scissors');
    if (button1){
        button1.addEventListener('click', function(){
            playRound("rock");
            playGame();
        });
    }
    else{
        console.error('Button 1 element not found');
    }
    if (button2){
        button2.addEventListener('click', function(){
            playRound("paper");
            playGame();
        });
    }
    else{
        console.error('Button 2 element not found');
    }
    if (button3){
        button3.addEventListener('click', function(){
            playRound("scissors");
            playGame();
        });
    }
    else{
        console.error('Button 3 element not found');
    }
});

// 5. Main Execution Code
//(function main(){})();

function playGame(){
    /* Add playRound to this function
    5 - round game that keeps score and reports a winner or loser at the end
    Can use a loop (if know already) or just call the playRound function 5 times in a row
    Use prompt() to the input from user */

    if (playerWins === 5 || computerWins === 5){
        const outputDiv = document.getElementById("output");
        const paragraph = document.createElement("p");
        let message = "";
        if (playerWins === 5 && playerWins > computerWins){
            message = "¡Player wins the game!";
        } else if (computerWins === 5 && computerWins > playerWins){
            message = "¡Computer wins the game!";
        } else {
            message = "¡OMG! ¡It's a tie!!!";
        }
        paragraph.textContent = message;
        outputDiv.appendChild(paragraph);
    }
}
