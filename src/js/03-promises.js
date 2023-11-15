import { Notify } from 'notiflix/build/notiflix-notify-aio';

// const refs = {
//   form: document.querySelector('.form'),
//   amountInput: document/querySelector('.input[name="amount"]'),
//   delayInput: document.querySelector('input[name="delay"]'),
//   stepInput: document.querySelector('input[name="step"]'),

//   amount: parseInt(refs.amountInput.value), // кількість разів виклику функції
//   delay: parseInt(refs.delayInput.value), // початкове затримка
//   step: parseInt(refs.stepInput.value), // різниця між затримками
// }


const form = document.querySelector('.form');
const amountInput = document.querySelector('input[name="amount"]');
const delayInput = document.querySelector('input[name="delay"]');
const stepInput = document.querySelector('input[name="step"]');


form.addEventListener('submit', function(event) {
  event.preventDefault();

  const amount = parseInt(amountInput.value); // кількість разів виклику функції
const delay = parseInt(delayInput.value); // початкове затримка
const step = parseInt(stepInput.value); // різниця між затримками


  for (let i = 0; i < amount; i++) {
    setTimeout(() => {
      createPromise(i, delay);
      delay += step; // збільшуємо затримку для наступного виклику
    }, delay * i);
  }
});


function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
    

  } else {
    Notify.failure(`Rejected promise ${position} in ${delay}ms`);
    
  }
}
