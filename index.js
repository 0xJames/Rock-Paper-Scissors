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
    /*for (let i=0; i<5; i++){
        let pSelection = prompt("make your choice!")
        //console.log(pSelection)
        let comSelection = getComputerChoice()
        //console.log(comSelection)
        playRound(pSelection,comSelection)
        console.log(playerPoint, comPoint)
    }*/
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

const container = document.querySelector("#container")
const buttons = document.createElement("div")
buttons.classList.add("buttons")
container.appendChild(buttons)


const rockButton = document.createElement("button")
const paperButton = document.createElement("button")
const ScissorsButton = document.createElement("button")
buttons.appendChild(rockButton)
buttons.appendChild(paperButton)
buttons.appendChild(ScissorsButton)

buttons.style.backgroundColor ="pink"

let allButtons = document.getElementsByTagName("button")
allButtons.style.backgroundColor="black"  //only can select 1 but not all the elements, better off doing styling in CSS if page not dynamic.
                                        // would have to iterate over nodelist to achieve it in js file. 


//document.querySelector("#container").appendChild(buttonDiv)
