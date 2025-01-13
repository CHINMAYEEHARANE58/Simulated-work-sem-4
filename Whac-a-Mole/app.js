const squares = document.querySelectorAll(".square");
const timeLeft = document.querySelector("#time-left");
const scoreDisplay = document.querySelector("#score");

let result = 0;
let hitPosition;
let currentTime = 60;
let timerId = null;
let moleSpeed = 1000; 

function randomSquare() {
  squares.forEach((square) => {
    square.classList.remove("mole");
    square.classList.remove("bonus-mole");
  });

  const randomSquare = squares[Math.floor(Math.random() * squares.length)];
  const isBonus = Math.random() < 0.2;

  if (isBonus) {
    randomSquare.classList.add("bonus-mole");
  } else {
    randomSquare.classList.add("mole");
  }
  hitPosition = randomSquare.id;
}

squares.forEach((square) => {
  square.addEventListener("mousedown", () => {
    if (square.id === hitPosition) {
      const isBonus = square.classList.contains("bonus-mole");
      result += isBonus ? 5 : 1; 
      scoreDisplay.textContent = result;
      hitPosition = null;

      if (result % 10 === 0 && moleSpeed > 300) {
        clearInterval(timerId);
        moleSpeed -= 100; 
        moveMole();
      }
    }
  });
});

function moveMole() {
  timerId = setInterval(randomSquare, moleSpeed);
}

function countDown() {
  currentTime--;
  timeLeft.textContent = currentTime;

  if (currentTime === 0) {
    clearInterval(timerId);
    clearInterval(countDownTimerId);
    alert("GAME OVER! Your final score is " + result);
  }
}

let countDownTimerId = setInterval(countDown, 1000);

moveMole();
