/*console.log('If you see this message, your script is running.');*/

playGame();

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

function playRound(playerSelection, computerSelection){
    /* Play a single round of the game
    Return a string that declares the winner or tie of the round like: "You Lose! Paper beats Rock"
    Make the function's playerSelection parameter case-insensitive
    Make sure to return the result of this function
    Only add console log to see the result */
    if ((computerSelection == "rock" && playerSelection == "rock") || (computerSelection == "paper" && playerSelection == "paper") || (computerSelection == "scissors" && playerSelection == "scissors")){
        console.log("¡It's a Tie! Both were " + computerSelection)
        return "tie";
    } else if ((computerSelection == "paper" && playerSelection == "rock") || (computerSelection == "rock" && playerSelection == "scissors") || (computerSelection == "scissors" && playerSelection == "paper")){
        console.log("¡You Lose! " + computerSelection + " over " + playerSelection)
        return "lose";
    } else {
        console.log("¡You Win! " + playerSelection + " over " + computerSelection)
        return "win";
    }
}

function playGame(){
    /* Add playRound to this function
    5 - round game that keeps score and reports a winner or loser at the end
    Can use a loop (if know already) or just call the playRound function 5 times in a row
    Use prompt() to the input from user */
    let playerWins = 0;
    let computerWins = 0;
    let playerSelection = "";

    for (let i = 0; i < 5; i++){
        playerSelection = prompt("ROUND " + (i+1) + " - Please enter your selection: rock, paper or scissors");
        playerChoice = playerSelection.toLowerCase();
        /*console.log("Player selection: " + playerChoice);*/
        let computerSelection = getComputerChoice();
        /*console.log("Computer Choice: " + computerSelection);*/
        let roundResult = playRound(playerChoice, computerSelection);

        if (roundResult == "win"){
            playerWins++;
            console.log("Player Wins:" + playerWins);
            continue;
        } else if (roundResult == "tie"){
            playerWins++;
            console.log("Player Wins:" + playerWins);
            computerWins++;
            console.log("Computer Wins:" + computerWins);
            continue;
        } else {
            computerWins++;
            console.log("Computer Wins:" + computerWins);
            continue;
        }
    }
    
    if (playerWins > computerWins){
        console.log("¡Player wins the game!");
    } else if (computerWins > playerWins){
        console.log("¡Computer wins the game!");
    } else {
        console.log("¡OMG! ¡It's a tie!!!");
    }
}