import Notiflix from 'notiflix';



const ref = {
  formEl: document.querySelector('.form'),
delayInput: document.querySelector('input[name="delay"]'),
stepInput: document.querySelector('input[name="step"]'),
  amountInput: document.querySelector('input[name="amount"]'),
}

ref.formEl.addEventListener('submit' , createPromises)


function createPromise(position, delay) {


  return new Promise((resolve, reject) => {

      const shouldResolve = Math.random() > 0.3;

  setTimeout(() => {
    if (shouldResolve) {
      resolve(({ position, delay })) 

    } else {
    reject(({ position, delay }))
  }
  }, delay);
});
}
function createPromises(event) {
    event.preventDefault()
  
  const delay = Number(ref.delayInput.value);
  const step = Number(ref.stepInput.value);
  const amount = Number(ref.amountInput.value);

  const promises = [];

  for (let i = 1; i <= amount; i+1) {
    const currentDelay = delay + (i-1)*step;
    promises.push(createPromise(i, currentDelay));
  }

  promises.forEach((promise) => {
    promise
      .then(({ position, delay }) => {
        Notiflix.Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`Rejected promise ${position} in ${delay}ms`);
      });
  });
}

