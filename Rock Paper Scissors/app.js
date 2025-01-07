const computerChoiceDisplay = document.getElementById('comp')
const userChoiceDisplay = document.getElementById('user')
const resultDisplay = document.getElementById('result')
const choices = document.querySelectorAll('button')
let userChoice
let computerChoice
let result

choices.forEach(choice => choice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateCompChoice()
    getResult()
}))

function generateCompChoice(){
    const randomNumber = Math.floor(Math.random() * 3)
    console.log(randomNumber)

    if(randomNumber === 0){
        computerChoice = 'Rock'
    }
    else if(randomNumber === 1){
        computerChoice = 'Paper'
    }
    else if(randomNumber === 2){
        computerChoice = 'Scissors'
    }

    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult(){
    if(computerChoice === userChoice){
        result = "It's a draw!"
    }
    if(computerChoice === 'Rock' && userChoice === 'Paper'){
        result = "You win!"
    }
    if(computerChoice === 'Rock' && userChoice === 'Scissors'){
        result = "You lost!"
    }
    if(computerChoice === 'Paper' && userChoice === 'Scissors'){
        result = "You win!"
    }
    if(computerChoice === 'Paper' && userChoice === 'Rock'){
        result = "You lost!"
    }
    if(computerChoice === 'Scissors' && userChoice === 'Rock'){
        result = "You win!"
    }
    if(computerChoice === 'Scissors' && userChoice === 'Paper'){
        result = "You lost!"
    }

    resultDisplay.innerHTML = result
}