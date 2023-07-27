function getComputerChoice(){
    let rpsChoices = ['Rock', 'Paper', 'Scissors'];
    let computerChoice = rpsChoices[Math.floor(Math.random() * 3)];
    return computerChoice;
}


//Function for checking the winner of the game by using scores
function getResult(playerChoice, computerChoice) {    
    let score;
  
    //in case of match draws
    if(playerChoice === computerChoice){
      score = 0;
    } 
    //in Case of human win
    else if(playerChoice === 'Rock' && computerChoice === 'Scissors'){
      score = 1;
    } 
    else if(playerChoice === "Paper" && computerChoice === "Rock"){
      score = 1;
    } 
    else if(playerChoice === "Scissors" && computerChoice === "Paper"){
      score = 1;
    } 
    //in case of human loose
    else {
      score = -1;
    }
  
    // return score
    return score;
}

//function for showing the game on screen
function showResult(score, playerChoice, computerChoice) {
    let result = document.getElementById('result')
    switch (score) {
      case -1:
        result.innerText = `You Lose!`
        break;
      case 0:
        result.innerText = `It's a Draw!`
        break;
      case 1:
        result.innerText = `You Win!`
        break;
    }
  
    let playerScore = document.getElementById('player-score')
    let hands = document.getElementById('hands')
    playerScore.innerText = `${Number(playerScore.innerText) + score}`
    hands.innerText = `👱 ${playerChoice} vs 🤖 ${computerChoice}`
}
  
//call all functions when buttons are click
function onClickRPS(playerChoice){
    const computerChoice = getComputerChoice()
    const score = getResult(playerChoice.value, computerChoice)
    showResult(score, playerChoice.value, computerChoice)
}

//Make loop on all rpsbuttons, for calling of "onClickRPS" function
let rpsButtons = document.querySelectorAll('.rpsButton'); // use querySelector to select all RPS Buttons
rpsButtons.forEach(rpsButton => {
    rpsButton.onclick = () => onClickRPS(rpsButton)
})
  
//When endgame button is clicked
let endGameButton = document.getElementById('endGameButton')
endGameButton.onclick = ()=>{
    let playerScore = document.getElementById('player-score')
    let hands = document.getElementById('hands')
    let result = document.getElementById('result')
    playerScore.innerText = ''
    hands.innerText = ''
    result.innerText = ''
}