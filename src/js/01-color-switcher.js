const refs = {
  btnStart: document.querySelector('[data-start]'),
  btnStop: document.querySelector('[data-stop]'),
  body: document.querySelector('body'),
};

const inActive = true;
let period = null;

refs.btnStart.addEventListener('click', clickStart);
refs.btnStop.addEventListener('click', clickStop);

refs.btnStop.disabled = inActive;

function clickStart() {
  refs.btnStart.disabled = inActive;
  refs.btnStop.disabled = !inActive;

  randomColor(refs.body);
  period = setInterval(() => {
    randomColor(refs.body);
  }, 1000);
}

function clickStop(event) {
  refs.btnStart.disabled = !inActive;
  refs.btnStop.disabled = inActive;

  clearInterval(period);
}

function randomColor(el) {
  el.style.backgroundColor = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
