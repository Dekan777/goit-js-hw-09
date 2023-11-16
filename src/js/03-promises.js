import { Notify } from 'notiflix/build/notiflix-notify-aio';

const form = document.querySelector('.form');
const amountInput = document.querySelector('input[name="amount"]');
const delayInput = document.querySelector('input[name="delay"]');
const stepInput = document.querySelector('input[name="step"]');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const amount = parseInt(amountInput.value);
  const step = parseInt(stepInput.value);
  let delay = parseInt(delayInput.value);

  for (let i = 0; i < amount; i++) {
    setTimeout(() => {
      createPromise(i, delay);
        delay += step;
    }, step * i);
  }
});

function createPromise(position, delay) {
  setTimeout(() => {
    const shouldResolve = Math.random() > 0.3;

    if (shouldResolve) {
      Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
    } else {
      Notify.failure(`Rejected promise ${position} in ${delay}ms`);
    }
  });
}
