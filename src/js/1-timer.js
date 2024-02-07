import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

import izitoast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const startButton = document.querySelector('button[data-start]');
const days = document.querySelector('span[data-days');
const hours = document.querySelector('span[data-hours');
const minutes = document.querySelector('span[data-minutes');
const seconds = document.querySelector('span[data-seconds');
const values = document.querySelectorAll('.value');

let userSelectedDate = null;
const currentTime = new Date();

let timeDifference = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    (selectedDates = selectedDates[0]), userSelectedDate;
    userSelectedDate = selectedDates;
    if (currentTime.getTime() < selectedDates.getTime()) {
      timeDifference = selectedDates.getTime() - currentTime.getTime();
      startButton.disabled = false;
    } else {
      startButton.disabled = true;
      izitoast.show({
        message: 'Please choose a date in the future',
        messageColor: 'white',
          backgroundColor: '#e34234',
        position: 'topRight',
      });
      //   window.alert('Please choose a date in the future');
    }
  },
};

flatpickr('#datetime-picker', options);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

setTimeout(() => {
  const result = convertMs(timeDifference);
  days.textContent = result.days;
  hours.textContent = result.hours;
  minutes.textContent = result.minutes;
  seconds.textContent = result.seconds;
  values.forEach(child => {
    child.textContent =
      child.textContent.length < 2
        ? '0' + child.textContent
        : child.textContent;
  });
  //   console.log(days.textContent.padStart(3, '00'));
}, 8000);

// const resultKeys = Object.keys(result).map(key =>
//   key < 10 ? key.padStart(1, '0') : []
// );
//   for (let key in result) {
//     result[key] = result[key] < 10 ? '0' + result[key] : result[key];
//     console.log(result[key]);
//   }
// if (result.days < 10) {
//     days.textContent = days.textContent.toString().padStart(2, '0');
//   } else if (result.hours < 10) {
//     hours.textContent = hours.textContent.toString().padStart(2, '0');
//   } else if (result.minutes < 10) {
//     minutes.textContent = minutes.textContent.toString().padStart(2, '0');
//   } else if (result.seconds < 10) {
//     seconds.textContent = seconds.textContent.toString().padStart(2, '0');
//   }
