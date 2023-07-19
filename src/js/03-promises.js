import Notiflix, { Notify } from 'notiflix';

const form = document.querySelector('.form');
let firstDaleyInput = null;
let daleyStepInput = null;
let amountInput = null;


const onSubmitForm = event => {
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
  
}




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
  })
  
}


form.addEventListener('submit', onSubmitForm);