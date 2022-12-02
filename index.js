function getComputerChoice(){
    let randomNumber = Math.random()
    console.log(randomNumber)
    if (randomNumber < 1/3) {
        return "Rock"}
    else if (randomNumber < 2/3) {
        return "Paper"}
    else {
        return "Scissor"}

    }
 // randomly return 1 of 3 choices

function playRound(playerSelection, computerSelection){
    if (playerSelection == "Rock" && computerSelection == "Scissor"){
        return "You Win! Rock beats Scissor"
    } 
    else if (playerSelection == "Rock" && computerSelection == "Rock"){
        return "Tie!"
    } 
    else if (playerSelection == "Rock" && computerSelection == "Paper"){
        return "LOSER!"
    } 
}

let playerSelection = prompt("Make your selection!");
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection,computerSelection));

function game(){
    for (let i =0; i<5;i++){
        playRound(playerSelection, computerSelection)
        console.log(game())
    }
}