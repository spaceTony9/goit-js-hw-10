import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const submitBtn = document.querySelector('button');
const delayInput = document.querySelector('input[name="delay"]');
const fulfilledBtn = document.querySelector('input[value="fulfilled"]');
const rejectedBtn = document.querySelector('input[value="rejected"]');

submitBtn.addEventListener('click', e => {
  e.preventDefault();
  if (delayInput.value) { //validation that delay input must be filled 
    if (fulfilledBtn.checked || rejectedBtn.checked) { //validation on the buttons
      const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
          if (fulfilledBtn.checked === true) { //checking which radio button was chosen 
            resolve(delayInput.value);
          } else {
            reject(delayInput.value);
          }
        }, delayInput.value);
      });
      promise
        .then(value => {
          popUpMessage();
        })
        .catch(error => {
          popUpMessage();
        });
    } else { // in case none of buttons were checked
      iziToast.show({
        message: `⚠️ One of the buttons must be checked. Try again!`,
        backgroundColor: 'orange',
        messageColor: 'white',
        messageSize: '20',
        position: 'topRight',
      });
    }
  } else { //in case delay field is empty
    iziToast.show({
      message: `⚠️ Delay field must be filled. Try again!`,
      backgroundColor: 'orange',
      messageColor: 'white',
      messageSize: '20',
      position: 'topRight',
    });
  }
});

function popUpMessage() { // function to adjuct pop up message for fulfillment and rejection
  let message = null;
  let backgroundColor = null;
  if (fulfilledBtn.checked === true) {
    message = `✅ Fulfilled promise in ${delayInput.value}ms`;
    backgroundColor = '#3cb371';
  } else {
    message = `❌ Rejected promise in ${delayInput.value}ms`;
    backgroundColor = '#cd5c5c';
  }
  iziToast.show({ // adjusted settings for pop up message for rejection or fulfillment
    title: '',
    messageColor: 'white',
    message: message,
    messageSize: '20',
    backgroundColor: backgroundColor,
    position: 'topRight',
    resetOnHover: true,
    timeout: 3000,
  });
}
