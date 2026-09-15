const INITIAL_TIME = 1500; // 25 minutes (in seconds)
let seconds = INITIAL_TIME;
let timerId = null;

const timerElement = document.getElementById("timer");

function updateDisplay() {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  timerElement.textContent = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

function startTimer() { 
  if (timerId !== null) return;

  timerId = setInterval(() => {
    if (seconds > 0) {
      seconds--;
      updateDisplay();
    } else {
      pauseTimer();
    }
  }, 1000);
}

function pauseTimer() {
  clearInterval(timerId);
  timerId = null;
}

function resetTimer() {
  pauseTimer();          // Stop timer if running
  seconds = INITIAL_TIME; // Reset back to 25 minutes
  updateDisplay();       // Update display to 25:00
}

function endTimer() {
  pauseTimer();
  seconds = 0;
  updateDisplay();       // Set display to 00:00
}