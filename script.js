const computerChoice = document.querySelector('#computer-choice')
const userChoice = document.querySelector('#user-choice')
const result = document.querySelector('#result')

const possibleChoice = document.querySelectorAll('button')
let userPick
let compPick
let winner

possibleChoice.forEach(button =>{
    button.addEventListener('click', (e)=>{
        userPick = e.target.id
        userChoice.innerText = userPick
        GeneratComputerChoice()
        getResult()
    })
})

function GeneratComputerChoice(){
    const randomNumber = Math.floor(Math.random()*3)
    if(randomNumber == 0){
        compPick = 'rock'
    }
    else if(randomNumber == 1){
        compPick = 'paper'
    }
    else{
        compPick = 'scissor'
    }
    computerChoice.innerText = compPick

}

function getResult(){
    if(compPick == userPick){
        winner = 'it is a draw'
    }
    else if(compPick == 'rock' && userPick == 'paper'){
        winner = 'you won the game'
    }
    else if(compPick == 'rock' && userPick == 'scissor'){
        winner = 'you lost the game'
    }
    else if(compPick == 'paper' && userPick == 'rock'){
        winner = 'you lost the game'
    }
    else if(compPick == 'paper' && userPick == 'scissor'){
        winner = 'you won the game'
    }
    else if(compPick == 'scissor' && userPick == 'rock'){
        winner = 'you won the game'
    }
    else if(compPick == 'scissor' && userPick == 'paper'){
        winner = 'you lost the game'
    }
    result.innerText = winner
}

