const email = document.querySelector('#email');
const senha = document.querySelector('#senha');
const button = document.querySelector('#button');

button.addEventListener('click', () => {
  if (email.value === 'tryber@teste.com' && senha.value === '123456') {
    window.alert('Olá, Tryber!');
  } else {
    window.alert('Email ou senha inválidos.');
  }
});

const submit = document.querySelector('#submit-btn');
const checkbox = document.querySelector('#agreement');

checkbox.addEventListener('click', () => {
  if (!checkbox.checked) {
    submit.disabled = true;
  } else if (checkbox.checked) {
    submit.disabled = false;
  }
});
