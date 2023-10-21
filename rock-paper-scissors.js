// get random choice of computer
function getComputerChoice() {
     let choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random()*3)];
}

// get Player selection
function getPlayerChoice() {
    choice = prompt("Choose one of 'Rock', 'Paper', or 'Scissors': ");
    while (!choice) {
        alert("Please choose!");
        choice = prompt("Choose one of 'Rock', 'Paper', or 'Scissors': ");
    }
    return choice;
}

// play a single round; return winner string
// win: rock - scissor, scissor - paper, paper - rock
function playSingleRound(computerChoice, playerChoice) {
    playerChoice = playerChoice.toLowerCase();
    let winnerString;
    if (computerChoice === playerChoice) {
        winnerString = "It's a tie!";
    } else if (computerChoice === "rock" && playerChoice === "scissor" ||
                computerChoice === "scissor" && playerChoice === "paper" ||
                computerChoice === "paper" && playerChoice === "rock") {
        winnerString = `You lose! ${computerChoice} beats ${playerChoice}`;
    } else {
        winnerString = `You win! ${playerChoice} beats ${computerChoice}`;
    }
    return winnerString;
}

// play a game: call singleRound 5 times; return overall winner
function playGame() {
    let playerWins = 0;
    let computerWins = 0;
    for (let i = 1; i <= 5; i++) {
        winMessage = playSingleRound(getComputerChoice(), getPlayerChoice());
        console.log(winMessage);
        if (winMessage.slice(4, 7) === "win") {
            playerWins++;
        } else if(winMessage.slice(4, 8) === "lose") {
            computerWins++;
        }
    }
    if (playerWins > computerWins) {
        console.log("You win!");
    } else if (computerWins > playerWins) {
        console.log("You lose!");
    } else {
        console.log("It's a tie!");
    }
}

playGame();