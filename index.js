function getComputerChoice(){
    let randomNumber = Math.random()
    //console.log(randomNumber)
    if (randomNumber < 1/3) {
        return "Rock"}
    else if (randomNumber < 2/3) {
        return "Paper"}
    else {
        return "Scissors"}

    }
 // randomly return 1 of 3 choices

    let playerPoint = 0
    let comPoint = 0

 function playRound(playerSelection, computerSelection){
    pSelectionTitleCase = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase()
     
    if (pSelectionTitleCase == computerSelection) {

        playerPoint+= 0
        comPoint += 0
    }
        else if ((pSelectionTitleCase == "Rock" && computerSelection == "Scissors")
        || (pSelectionTitleCase == "Scissors" && computerSelection == "Paper")
        || (pSelectionTitleCase == "Paper" && computerSelection == "Rock")){
            
            playerPoint+= 1
            
        }
        else{
            
            comPoint+= 1
            
        }
    //console.log(playerPoint, comPoint)
    
}

function game(){
    playerPoint = 0
    comPoint = 0
    for (let i=0; i<5; i++){
        let pSelection = prompt("make your choice!")
        //console.log(pSelection)
        let comSelection = getComputerChoice()
        //console.log(comSelection)
        playRound(pSelection,comSelection)
        console.log(playerPoint, comPoint)
    }
    if (playerPoint > comPoint){
        console.log("You win!")
    }
        else if (playerPoint == comPoint){
            console.log("It's a TIE!")
        }
        else  {
            console.log("Bummer!")
        }

}


/*function game(){
    for (let i =0; i<5;i++){
        let playerSelection = prompt("Make your selection!");
        let computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection)
        console.log(playRound())
    }
} */