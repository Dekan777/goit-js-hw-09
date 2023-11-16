import { Notify } from 'notiflix/build/notiflix-notify-aio';

const form = document.querySelector('.form');
const amountInput = document.querySelector('input[name="amount"]');
const delayInput = document.querySelector('input[name="step"]');
const stepInput = document.querySelector('input[name="delay"]');

form.addEventListener('submit', function (event) {
  event.preventDefault();
  
  const amount = parseInt(amountInput.value);
  const step = parseInt(stepInput.value);
  let delay = parseInt(delayInput.value);

  for (let i = 0; i < amount; i++) {
    setTimeout(() => {
      createPromise(i, delay);
      delay += step;
    }, delay * i);
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

// createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });

// function createPromise(position, delay) {
//   const shouldResolve = Math.random() > 0.3;
//   if (shouldResolve) {
//     // Fulfill
//   } else {
//     // Reject
//   }
// }