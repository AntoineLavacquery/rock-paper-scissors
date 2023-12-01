// Randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’
function getComputerChoice() {
    let random = Math.random() * 3;

    if (random < 1) return ("Rock");
    else if (random < 2) return ("Paper");
    else return("Scissors");
}

function playRound(playerSelection, computerSelection) {
    // To ensure there's no tie
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

function game(playerSelection) {
    computerSelection = getComputerChoice();
    return playRound(playerSelection, computerSelection);
}

let playerScore = 0;
let computerScore = 0;
const htmlPlayerScore = document.querySelector("#playerScore");
const htmlComputerScore = document.querySelector("#computerScore");

const choiceButtons = document.querySelector("#choiceButtons");
choiceButtons.addEventListener("click", function (event) {
    let playerSelection = event.target.id;
    gameResult = game(playerSelection);
    
    if (gameResult.win) {
        playerScore += 1;
        htmlPlayerScore.innerText = playerScore;
        
        console.log(`Player: ${playerScore} | Computer: ${computerScore}\nYou win! ${gameResult.player} beats ${gameResult.computer}`)
    }
    else {
        computerScore += 1;
        htmlComputerScore.innerText = computerScore;
        console.log(`Player: ${playerScore} | Computer: ${computerScore}\nYou lose! ${gameResult.player} is beaten by ${gameResult.computer}`)
    }
})

