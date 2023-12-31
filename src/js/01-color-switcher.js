const refs = {
  startBtn: document.querySelector('button[data-start]'),
  stopBtn: document.querySelector('button[data-stop]'),
  colorBody: document.body,
};

let colorRandom;
let isThemeChanging = false;
refs.stopBtn.disabled = true;

refs.startBtn.addEventListener('click', function () {
  if (!isThemeChanging) {
    isThemeChanging = true;
    refs.startBtn.disabled = true;
    refs.stopBtn.disabled = false;
    colorRandom = setInterval(setRandomBackgroundColor, 1000);
  }
});

refs.stopBtn.addEventListener('click', function () {
  if (isThemeChanging) {
    isThemeChanging = false;
    refs.startBtn.disabled = false;
    refs.stopBtn.disabled = true;
    clearInterval(colorRandom);
  }
});

function setRandomBackgroundColor() {
  refs.colorBody.style.backgroundColor = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
