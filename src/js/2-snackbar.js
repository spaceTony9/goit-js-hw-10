import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
const submitBtn = document.querySelector('button[type="submit]"');
const delayInput = document.querySelector('input[name="delay"]');
const fulfilledBtn = document.querySelector('input[value="fulfilled"]');
const rejectedBtn = document.querySelector('input[value="rejected"]');

form.addEventListener('submit', e => {
  e.preventDefault();
  if (delayInput.value !== '') {
    // delay input field validation
    if (fulfilledBtn.checked || rejectedBtn.checked) {
      //radio buttons validation
      const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
          if (fulfilledBtn.checked === true) {
            resolve(delayInput.value);
          } else {
            reject(delayInput.value);
          }
        }, delayInput.value);
      });
      promise
        .then(fulfilledValue => {
          iziToast.show({
            title: '',
            messageColor: 'white',
            message: `✅ Fulfilled promise in ${fulfilledValue}ms`,
            messageSize: '20',
            backgroundColor: '#3cb371',
            position: 'topRight',
            resetOnHover: true,
            timeout: 3000,
          });
        })
        .catch(rejectedValue => {
          iziToast.show({
            title: '',
            messageColor: 'white',
            message: `❌ Rejected promise in ${rejectedValue}ms`,
            messageSize: '20',
            backgroundColor: '#cd5c5c',
            position: 'topRight',
            timeout: 3000,
          });
        });
    } else {
      // radio buttons are not selected
      iziToast.show({
        message: `⚠️ One of the buttons must be checked. Try again!`,
        backgroundColor: 'orange',
        messageColor: 'white',
        messageSize: '20',
        position: 'topRight',
      });
    }
  } else {
    // delay input is empty
    iziToast.show({
      message: `⚠️ Delay field must be filled. Try again!`,
      backgroundColor: 'orange',
      messageColor: 'white',
      messageSize: '20',
      position: 'topRight',
    });
  }
});

