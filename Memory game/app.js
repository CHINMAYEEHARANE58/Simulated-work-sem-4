const grid = document.querySelector('#grid');
const timerDisplay = document.getElementById('timer');
const scoreDisplay = document.getElementById('score');

const flipSound = new Audio('sounds/select.wav'); 
const winSound = new Audio('sounds/win.wav');

const cardArray = [
    { name: 'fries', img: 'images/fries.png' },
    { name: 'cheeseburger', img: 'images/cheeseburger.png' },
    { name: 'hotdog', img: 'images/hotdog.png' },
    { name: 'ice-cream', img: 'images/ice-cream.png' },
    { name: 'milkshake', img: 'images/milkshake.png' },
    { name: 'pizza', img: 'images/pizza.png' },
    { name: 'fries', img: 'images/fries.png' },
    { name: 'cheeseburger', img: 'images/cheeseburger.png' },
    { name: 'hotdog', img: 'images/hotdog.png' },
    { name: 'ice-cream', img: 'images/ice-cream.png' },
    { name: 'milkshake', img: 'images/milkshake.png' },
    { name: 'pizza', img: 'images/pizza.png' },
];

cardArray.sort(() => 0.5 - Math.random());

let cardsChosen = [];
let cardsChosenIds = [];
let cardsWon = [];
let timer = 0;
let timerInterval;

function createBoard() {
    cardArray.forEach((item, index) => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.setAttribute('data-id', index);

        const cardInner = document.createElement('div');
        cardInner.classList.add('card-inner');

        const frontFace = document.createElement('div');
        frontFace.classList.add('card-front');

        const backFace = document.createElement('div');
        backFace.classList.add('card-back');
        backFace.style.backgroundImage = `url(${item.img})`;

        cardInner.appendChild(frontFace);
        cardInner.appendChild(backFace);
        card.appendChild(cardInner);

        card.addEventListener('click', flipCard);
        grid.appendChild(card);
    });
}

function flipCard() {
    const cardId = this.getAttribute('data-id');
    if (!cardsChosenIds.includes(cardId) && cardsChosen.length < 2) {
        this.classList.add('flipped');
        cardsChosen.push(cardArray[cardId].name);
        cardsChosenIds.push(cardId);
        flipSound.play();

        if (cardsChosen.length === 2) {
            setTimeout(checkMatch, 1000);
        }
    }
}

function checkMatch() {
    const cards = document.querySelectorAll('.card');
    const [id1, id2] = cardsChosenIds;

    if (cardsChosen[0] === cardsChosen[1] && id1 !== id2) {
        cardsWon.push(cardsChosen);
        cards[id1].removeEventListener('click', flipCard);
        cards[id2].removeEventListener('click', flipCard);
    } else {
        cards[id1].classList.remove('flipped');
        cards[id2].classList.remove('flipped');
    }

    cardsChosen = [];
    cardsChosenIds = [];
    scoreDisplay.textContent = cardsWon.length;
    

    if (cardsWon.length === cardArray.length / 2) {
        clearInterval(timerInterval);
        alert(`Congratulations! You completed the game in ${timer}s!`);
        winSound.play();
    }
}

function startTimer() {
    timer = 0;
    timerInterval = setInterval(() => {
        timer++;
        timerDisplay.textContent = `Time: ${timer}s`;
    }, 1000);
}

function initializeGame() {
    createBoard();
    startTimer();
}

initializeGame();
