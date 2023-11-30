function getPlayerChoice() {
    playerSelection = prompt("Choice: ");
    // Ensure the good format of player input
    playerSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1);

    // Ensure input corresponds one of the three possibilities
    while (playerSelection !== ("Rock" || "Paper" || "Scissors")) {
        playerSelection = prompt("Invalid, please type again: ");
        // Ensure the good format of player input
        playerSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1);
    }
    return playerSelection;
}

function getComputerChoice() {
    // will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’
    let random = Math.random() * 3;

    if (random < 1) return ("Rock");
    else if (random < 2) return ("Paper");
    else return("Scissors");
}

function playRound(playerSelection, computerSelection) {
    while (playerSelection === computerSelection){
        computerSelection = getComputerChoice();
    }

    if (playerSelection === "Rock" && computerSelection === "Scissors"
        || playerSelection === "Paper" && computerSelection === "Rock"
        || playerSelection === "Scissors" && computerSelection === "Paper") {
            return {win: 1, player: playerSelection, computer: computerSelection}
    }
    else return {win: 0, player: playerSelection, computer: computerSelection}
}

function game() {
    playerSelection = getPlayerChoice();
    computerSelection = getComputerChoice();
    return playRound(playerSelection, computerSelection)
}

let playerScore = 0;
let computerScore = 0;

for (i = 0; i < 5; i++) {
    gameResult = game();
    if (gameResult.win) {
        playerScore += 1;
        console.log(`Player: ${playerScore} | Computer: ${computerScore}\nYou win! ${gameResult.player} beats ${gameResult.computer}`)
    }
    else {
        computerScore += 1;
        console.log(`Player: ${playerScore} | Computer: ${computerScore}\nYou lose! ${gameResult.player} is beaten by ${gameResult.computer}`)
    }
}

console.log(`Final result -> Player: ${playerScore} | Computer: ${computerScore}`)
