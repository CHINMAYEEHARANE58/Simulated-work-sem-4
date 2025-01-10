const squares = document.querySelectorAll(".grid div");
const startPauseButton = document.querySelector("#start-pause-button");
const timeLeftDisplay = document.querySelector("#time-left");
const resultDisplay = document.querySelector("#result");

let currentIndex = 1;
const width = 5;
let currentTime = 20;
let timerId = null;

function moveFrog(e) {
  squares[currentIndex].classList.remove("frog");

  switch (e.key) {
    case "ArrowLeft":
      if (currentIndex % width !== 0) currentIndex -= 1;
      break;
    case "ArrowRight":
      if (currentIndex % width < width - 1) currentIndex += 1;
      break;
    case "ArrowUp":
      if (currentIndex - width >= 0) currentIndex -= width;
      break;
    case "ArrowDown":
      if (currentIndex + width < width * width) currentIndex += width;
      break;
  }

  squares[currentIndex].classList.add("frog");

  checkOutcome();
}

function checkOutcome() {
  if (squares[currentIndex].classList.contains("ending-block")) {
    resultDisplay.textContent = "You Win!";
    clearInterval(timerId);
    document.removeEventListener("keyup", moveFrog);
  } else if (currentTime <= 0) {
    resultDisplay.textContent = "You Lose!";
    clearInterval(timerId);
    document.removeEventListener("keyup", moveFrog);
  }
}

startPauseButton.addEventListener("click", () => {
  if (timerId) {
    clearInterval(timerId);
    timerId = null;
    document.removeEventListener("keyup", moveFrog);
  } else {
    timerId = setInterval(() => {
      currentTime--;
      timeLeftDisplay.textContent = currentTime;
      if (currentTime <= 0) checkOutcome();
    }, 1000);
    document.addEventListener("keyup", moveFrog);
  }
});