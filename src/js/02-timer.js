import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const myInput = document.querySelector("#datetime-picker");
const inputBtn = document.querySelector('button[data-start]');
const resetBtn = document.querySelector('button[data-end]');


inputBtn.disabled = true;
let selectedDate = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
   selectedDate = selectedDates[0]
    const currentDate = new Date()
    const endedDate = selectedDate.getTime() > currentDate.getTime()
    if (!endedDate) {
      window.alert('Please choose a date in the future')
    } else {
      inputBtn.disabled = false;
      myInput.disabled = true;
    }
  },
};

const fp = flatpickr(myInput, options);

let intervalId;

inputBtn.addEventListener('click', () => {
  const selectedDate = fp.selectedDates[0].getTime();
  const timer = document.querySelector('.timer');

  const countdown = () => {
    const now = new Date().getTime();
    const timeLeft = selectedDate - now;

    if (timeLeft <= 0) {
      clearInterval(intervalId);
      inputBtn.disabled = true;
      return;
    }

    const { days, hours, minutes, seconds } = convertMs(timeLeft);

    document.querySelector('[data-days]').textContent = formatTime(days);
    document.querySelector('[data-hours]').textContent = formatTime(hours);
    document.querySelector('[data-minutes]').textContent = formatTime(minutes);
    document.querySelector('[data-seconds]').textContent = formatTime(seconds);
  }

  countdown(); // initial call to display the correct time on start
  intervalId = setInterval(countdown, 1000);
});

resetBtn.addEventListener('click', () => {
  clearInterval(intervalId);
  inputBtn.disabled = true;
  myInput.disabled = false;
  selectedDate = null;
  document.querySelector('[data-days]').textContent = '00';
  document.querySelector('[data-hours]').textContent = '00';
  document.querySelector('[data-minutes]').textContent = '00';
  document.querySelector('[data-seconds]').textContent = '00';
})

function formatTime(num) {
  return num.toString().padStart(2, '0');
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  return { days, hours, minutes, seconds };
}



