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
  
  let delay = Number(ref.delayInput.value);
  let step = Number(ref.stepInput.value);
  let amount = Number(ref.amountInput.value);


  for (let i = 1; i <= amount; i+=1) {
    const currentDelay = delay + (i-1)*step;
        createPromise(i, currentDelay).then(onSuccess).catch(onError);
  }

  function onSuccess({position, delay}){
        Notiflix.Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
  }
  
  function onError({ position, delay }) {
        Notiflix.Notify.failure(`Rejected promise ${position} in ${delay}ms`);
      }
  }


