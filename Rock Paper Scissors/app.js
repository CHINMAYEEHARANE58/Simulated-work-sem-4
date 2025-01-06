const computerChoiceDisplay = document.getElementById('comp')
const userChoiceDisplay = document.getElementById('user')
const resultDisplay = document.getElementById('result')
const choices = document.querySelectorAll('button')
let userChoice
let computerChoice

choices.forEach(choice => choice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateCompChoice()
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