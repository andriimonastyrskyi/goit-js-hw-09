const refs = {
  btnStart: document.querySelector('[data-start]'),
  btnStop: document.querySelector('[data-stop]'),
  body: document.querySelector('body'),
};

let period = null;

refs.btnStart.addEventListener('click', clickStart);
refs.btnStop.addEventListener('click', clickStop);

refs.btnStop.disabled = true;

function clickStart() {
  refs.btnStart.disabled = true;
  refs.btnStop.disabled = false;

  period = setInterval(() => {
    refs.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function clickStop(event) {
  refs.btnStart.disabled = false;
  refs.btnStop.disabled = true;

  clearInterval(period);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
