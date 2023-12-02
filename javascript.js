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
const htmlPlayerScore = document.querySelector("#player-score");
const htmlComputerScore = document.querySelector("#computer-score");
const htmlFinalScore = document.querySelector("#result-annoncement");
const htmlRoundScore = document.querySelector("#round-score");


const choiceButtons = document.querySelector("#choice-buttons");
let buttons = choiceButtons.querySelectorAll("button");
buttons.forEach(function(button) {
    button.addEventListener("click", function() {
        const playerSelection = button.textContent;
        console.log(playerSelection);

        gameResult = game(playerSelection);
        
        if (gameResult.win) {
            playerScore += 1;
            htmlPlayerScore.innerText = playerScore;
            htmlRoundScore.innerHTML = `${gameResult.player} beats ${gameResult.computer.toLowerCase()}`
            htmlRoundScore.style.color = "var(--valid-color)";
        }
        else {
            computerScore += 1;
            htmlComputerScore.innerText = computerScore;
            htmlRoundScore.innerHTML = `${gameResult.player} is beaten ${gameResult.computer.toLowerCase()}`
            htmlRoundScore.style.color = "var(--scissors-color)";
        }

        if (playerScore === 5 || computerScore === 5) {
            buttons.forEach(function(button) {
                button.disabled = true;
            });

            if (playerScore > computerScore) htmlFinalScore.innerHTML = "You win !"
            else htmlFinalScore.innerHTML = "You lose !"
        }
    })
})

const startAgainBtn = document.querySelector("#start-again");
startAgainBtn.addEventListener("click", function (event) {
    playerScore = 0;
    computerScore = 0;
    htmlRoundScore.innerHTML = "-";
    htmlPlayerScore.innerText = playerScore;
    htmlComputerScore.innerText = computerScore;
    htmlFinalScore.innerHTML = "-"
    htmlFinalScore.color = ""

    buttons.forEach(function(button) {
        button.disabled = false;
    });
})

// startAgainBtn.disabled = true;
// startAgainBtn.style.margin = true;

