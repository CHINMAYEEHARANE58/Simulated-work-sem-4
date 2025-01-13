const computerChoiceDisplay = document.getElementById('comp');
const userChoiceDisplay = document.getElementById('user');
const resultDisplay = document.getElementById('result');
const winsDisplay = document.getElementById('wins');
const lossesDisplay = document.getElementById('losses');
const tiesDisplay = document.getElementById('ties');
const choices = document.querySelectorAll('.choice');

let userChoice, computerChoice, result;
let wins = 0, losses = 0, ties = 0;

const sounds = {
    click: new Audio('./sounds/select.wav'), 
    win: new Audio('./sounds/win.wav'),
    lose: new Audio('./sounds/lose.wav'),
    draw: new Audio('./sounds/draw.wav')
};

choices.forEach(choice => 
    choice.addEventListener('click', (e) => {
        sounds.click.play();
        userChoice = e.target.id;
        userChoiceDisplay.innerHTML = userChoice;
        generateCompChoice();
        getResult();
    })
);

function generateCompChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    computerChoice = ['Rock', 'Paper', 'Scissors'][randomNumber];
    computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult() {
    if (computerChoice === userChoice) {
        result = "It's a draw!";
        ties++;
        sounds.draw.play();
    } else if (
        (computerChoice === 'Rock' && userChoice === 'Paper') ||
        (computerChoice === 'Paper' && userChoice === 'Scissors') ||
        (computerChoice === 'Scissors' && userChoice === 'Rock')
    ) {
        result = "You win!";
        wins++;
        sounds.win.play();
    } else {
        result = "You lost!";
        losses++;
        sounds.lose.play();
    }
    updateResults();
}

function updateResults() {
    resultDisplay.innerHTML = result;
    
    if (result === "You win!") {
        resultDisplay.style.color = "green";
    } else if (result === "You lost!") {
        resultDisplay.style.color = "red";
    } else if (result === "It's a draw!") {
        resultDisplay.style.color = "orange";
    }
    winsDisplay.innerHTML = wins;
    lossesDisplay.innerHTML = losses;
    tiesDisplay.innerHTML = ties;
}
