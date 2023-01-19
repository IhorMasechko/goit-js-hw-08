import { throttle } from 'lodash';

const blank = document.querySelector('.feedback-form');
const email = document.querySelector('input[name="email"]');
const message = document.querySelector('textarea[name="message"]');

const LOCALSTORAGE_INFO = 'feedback-form-state';

blank.addEventListener(
  'input',
  throttle(e => {
    const objectToCatch = { email: email.value, message: message.value };
    localStorage.setItem(LOCALSTORAGE_INFO, JSON.stringify(objectToCatch));
  }, 500)
);

blank.addEventListener('submit', e => {
  e.preventDefault();
  if (email.value === '') {
    return alert('Please fill in the "Email"!');
  } else if (message.value === '') {
    return alert('Please fill in the "message"!');
  }

  console.log({ email: email.value, message: message.value });
  blank.reset();
  localStorage.removeItem(LOCALSTORAGE_INFO);
});

const load = key => {
  try {
    const dataState = localStorage.getItem(key);
    return dataState === null ? undefined : JSON.parse(dataState);
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
};

const storageBox = load(LOCALSTORAGE_INFO);
if (storageBox) {
  email.value = storageBox.email;
  message.value = storageBox.message;
}
