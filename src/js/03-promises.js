// import Notiflix from 'notiflix';

import { Notify } from 'notiflix/build/notiflix-notify-aio';

const ref = {
  form: document.querySelector('.form'),
  // в принципі пошук на кнопку не потрібний
  // button: document.querySelector('button'),
  amount: document.querySelector('input[name="amount"]'),
  step: document.querySelector('input[name="step"]'),
  delay: document.querySelector('input[name="delay"]'),
};

// слухач на кнопку Create promises
ref.form.addEventListener('submit', event => {
  event.preventDefault();

  // об'єкт event.currentTarget з трьома константами amount, step, delay
  const {
    elements: { amount, step, delay },
  } = event.currentTarget;

  // перетворює  в число з форми delay.value
  let numDelay = Number(delay.value);

  // цикл зі створеням промісу потрібно добре розібратися
  for (let i = 1; i <= amount.value; i++) {
    createPromise(i, numDelay)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })

      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });

    // змінна, яка зберігає число, яке показує затримку
    numDelay += Number(step.value);
  }
});

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
