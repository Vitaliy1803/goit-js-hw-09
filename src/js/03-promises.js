import Notiflix, { Notify } from 'notiflix';

const form = document.querySelector('.form');
let firstDaleyInput = null;
let daleyStepInput = null;
let amountInput = null;

function createPromise(position, delay) {
  return new Promise ((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    resolve({position, delay});
  } else {
    reject({position, delay});
  }
    }, delay);
  });
  
}

const onSubmitForm = (event) => {
  event.preventDefault();

  if(!event.target.tagName === 'BUTON') {
    return;
  }

  const {
    elements: {delay, step, amount},
  } = event.currentTarget;

  firstDaleyInput = Number(delay.value);
  daleyStepInput = Number(step.value);
  amountInput = Number(amount.value);

  if (firstDaleyInput < 0 || daleyStepInput < 0 || amountInput <= 0) {
    Notify.failure(`❌ Please input correct values!`);
    return;
  }

  for (let i = 1; i < amountInput; i++) {
    createPromise(i, firstDaleyInput)
    .then(({ position, delay }) => {
      Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
    });

     firstDaleyInput += daleyStepInput; 
    }

    event.currentTarget.reset();

};

form.addEventListener('submit', onSubmitForm);