let workMinutes = 4;
let breakMinutes = 4;
let seconds = 0;
let isWork = true;

const timerDiv = document.getElementById('timer');
const alertSound = document.getElementById('alert-sound');

function updateDisplay() {
  timerDiv.textContent = `${(isWork ? workMinutes : breakMinutes).toString().padStart(2,'0')}:${seconds.toString().padStart(2,'0')}`;
  document.body.style.backgroundColor = isWork ? 'rgba(0,0,0,0.6)' : 'rgba(0,128,0,0.6)'; // 工作黑 / 休息绿
}

function tick() {
  if (seconds === 0) {
    if ((isWork ? workMinutes : breakMinutes) === 0) {
      isWork = !isWork;
      seconds = 0;
      updateDisplay();
      alertSound.play(); // 播放提示音
      return;
    } else {
      seconds = 59;
      if (isWork) workMinutes--; else breakMinutes--;
    }
  } else {
    seconds--;
  }
  updateDisplay();
}

// 初始化
updateDisplay();
setInterval(tick, 1000);
