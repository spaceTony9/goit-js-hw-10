import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

import izitoast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const startButton = document.querySelector('button[data-start]');
const inputArea = document.querySelector('#datetime-picker');
const days = document.querySelector('span[data-days]');
const hours = document.querySelector('span[data-hours]');
const minutes = document.querySelector('span[data-minutes]');
const seconds = document.querySelector('span[data-seconds]');
const values = document.querySelectorAll('.value'); // initiated pseudo array from elements with .value class

const SECOND = 1000;

let userSelectedDate = null;
let currentTime = new Date();

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    selectedDates = selectedDates[0];
    userSelectedDate = selectedDates;
    if (currentTime.getTime() < selectedDates.getTime()) { // enables start button if chosen date is in the future
      startButton.disabled = false;
    } else { // disables start button if chosen date is in the past
      startButton.disabled = true;
      izitoast.show({ // shhows alert window with message to choose the correct date
        message: 'Please choose a date in the future',
        messageColor: 'white',
        backgroundColor: '#e34234',
        position: 'topRight',
      });
    }
  },
};

flatpickr('#datetime-picker', options); // calls date method

startButton.addEventListener('click', e => {
  timerCounter();
  startButton.disabled = true; // disabling start button after timer starts
  startButton.style.cursor = 'not-allowed';
  inputArea.disabled = true; // disabling input
  inputArea.style.cursor = 'not-allowed';
  
});

function timerCounter() {
  const timer = setInterval(() => { // interval to repeat code every second
    let currentTime = new Date();
    let timeDifference = userSelectedDate.getTime() - currentTime.getTime();

    let result = convertMs(timeDifference);

    // assigning results from convertMS function to text contects of elements
    days.textContent = result.days;
    hours.textContent = result.hours;
    minutes.textContent = result.minutes;
    seconds.textContent = result.seconds;

    // checking if the number has 2 digits, if not assigning "0" before each such number
    values.forEach(child => {
      child.textContent =
        child.textContent.length < 2
          ? '0' + child.textContent
          : child.textContent;
    });
    // checking if the timer came to zero and stopping the interval
    if (timeDifference <= 1000) {
      clearInterval(timer);
    }
  }, SECOND);
}


function convertMs(ms) {
  // Number of milliseconds per unit of time
  const minute = SECOND * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / SECOND);

  return { days, hours, minutes, seconds };
}
