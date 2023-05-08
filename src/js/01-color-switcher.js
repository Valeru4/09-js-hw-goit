
const ref = {
    start: document.querySelector('button[data-start]'),
    stop: document.querySelector('button[data-stop]'),
    body: document.querySelector("body"),
}

ref.start.addEventListener('click', onStartBtn)
ref.stop.addEventListener('click', onStopBtn)

let timerId = null

function onStartBtn() { 
    ref.start.disabled = true;
    timerId = setInterval(() => {
    const bodyColor = getRandomHexColor()
    ref.body.style.backgroundColor = bodyColor;
}, 1000);
}

function onStopBtn() {
    ref.start.disabled = false;
    clearInterval(timerId);
    ;
}
        
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}
