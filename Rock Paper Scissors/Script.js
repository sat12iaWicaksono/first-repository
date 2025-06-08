const playerPicked = document.getElementById("player-picked")
const computerPicked = document.getElementById("komputer-picked")
const buttonCompPicked = document.getElementById("comp-picked")
const result = document.getElementById("result")
const playerScore = document.getElementById ("player-score")
const compScore = document.getElementById("comp-score")
const refreshButton = document.getElementById("refresh")
const playAgain = document.getElementById("playagain-button")

let playerChoice =  ""
let plyrCSore = 0
let computerScore = 0

buttonCompPicked.disabled = true
function pilih(button){
    if (plyrCSore === 3 || computerScore === 3){
        playerChoice = button.value
        playerPicked.textContent = "Player Picked: " + playerChoice
        
        document.getElementById("rock").disabled = true
        document.getElementById("paper").disabled = true
        document.getElementById("scissors").disabled = true

        buttonCompPicked.disabled = false
        refreshButton.disabled = true
    }

    playerChoice = button.value;
    playerPicked.textContent = "Player Picked: " + playerChoice
    document.getElementById("rock").disabled = true
    document.getElementById("paper").disabled = true
    document.getElementById("scissors").disabled = true
    buttonCompPicked.disabled = false
}

playAgain.addEventListener('click', function(){
    playerPicked.textContent = "Player Picked:"
    computerPicked.textContent = "Computer Picked:"
    result.textContent = "Result:"
    plyrCSore = 0
    computerScore = 0


    document.getElementById("rock").disabled = false
    document.getElementById("paper").disabled = false
    document.getElementById("scissors").disabled = false

    buttonCompPicked.disabled = true

    refreshButton.disabled = true

    playerScore.textContent = "Player Score: 0"
    compScore.textContent = "Computer Score: 0"

    refreshButton.disabled = false
})
playAgain.disabled = true

buttonCompPicked.addEventListener('click', function(){
    const comPicked = [
        "Rock", "Paper", "Scissors"
    ]
    const randomIndex = Math.floor(Math.random()*comPicked.length)
    const computerChoice= comPicked[randomIndex]
    computerPicked.textContent = "Computer Picked: " + computerChoice
    
    if(playerChoice === computerChoice){
        result.textContent = "Result: Draw!"
    }else if (
        (playerChoice === "Rock" && computerChoice === "Scissors") || (playerChoice === "Paper" && computerChoice === "Rock") || (playerChoice === "Scissors" && computerChoice === "Paper")
    ){
        result.textContent = "Result: Player Win!"
        plyrCSore++
        playerScore.textContent = "Player Score: " + plyrCSore
    }else {
        result.textContent = "Result: Computer Win!"
        computerScore++
        compScore.textContent = "Computer Score: " + computerScore
    }
    
    if (plyrCSore === 3 || computerScore === 3){
        playAgain.disabled = false

        document.getElementById("rock").disabled = true
        document.getElementById("paper").disabled = true
        document.getElementById("scissors").disabled = true

        buttonCompPicked.disabled = true
        refreshButton.disabled = true
    }
    buttonCompPicked.disabled = true
})

refreshButton.addEventListener('click', function(){
   playerPicked.textContent = "Player Picked: "
   computerPicked.textContent = "Computer Picked: "
   result.textContent = "Result:"
   
    document.getElementById("rock").disabled = true
    document.getElementById("paper").disabled = true
    document.getElementById("scissors").disabled = true

    if (plyrCSore < 3 || computerScore < 3){
        playAgain.disabled = false

        document.getElementById("rock").disabled = false
        document.getElementById("paper").disabled = false
        document.getElementById("scissors").disabled = false

        buttonCompPicked.disabled = true
    }

    buttonCompPicked.disabled = true
})
refreshButton.disabled = false