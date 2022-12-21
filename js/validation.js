const frmContact = document.getElementById('frmContact');
const frmMessage = document.querySelector('.form__message');
const { email } = frmContact.elements;
const err = {
  EMAIL_LOWERCASE: 'Email address should be lower case.',
};

const showMessage = (isError, message) => {
  frmMessage.classList.remove('d-none');
  if (isError) {
    frmMessage.classList.remove('form__valid');
    frmMessage.classList.add('form__error');
  } else {
    frmMessage.classList.add('form__valid');
    frmMessage.classList.remove('form__error');
  }
  frmMessage.textContent = message;
};

frmContact.addEventListener('submit', (e) => {
  e.preventDefault();
});