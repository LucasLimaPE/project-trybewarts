const email = document.querySelector('#email');
const senha = document.querySelector('#senha');
const button = document.querySelector('#button');
const counter = document.querySelector('#counter')
const textArea = document.querySelector('#textarea')

button.addEventListener('click', () => {
  if (email.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
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

const evaluationForm = document.querySelector('#evaluation-form');
const inputName = document.querySelector('#input-name');
const inputLastName = document.querySelector('#input-lastname');
const inputEmail = document.querySelector('#input-email');
const inputHouse = document.querySelector('#house');
const inputTextArea = document.querySelector('#textarea');

function newValuesForm() {
  const inputHouseSelected = inputHouse.options[inputHouse.selectedIndex].value;
  const inputFamily = document.querySelector('input[name="family"]:checked').value;
  const inputRate = document.querySelector('input[name="rate"]:checked').value;
  const subject = document.querySelectorAll('input[class="subject"]:checked');
  const valuesSubject = [];
  for (let i = 0; i < subject.length; i += 1) {
    valuesSubject.push(` ${subject[i].value}`);
  }
  evaluationForm.innerHTML = '';
  const nome = document.createElement('p');
  evaluationForm.appendChild(nome);
  nome.innerText = `Nome: ${inputName.value} ${inputLastName.value}
  Email: ${inputEmail.value}
  Casa: ${inputHouseSelected}
  Família: ${inputFamily}
  Matérias:${valuesSubject}
  Avaliação: ${inputRate}
  Observações: ${inputTextArea.value}`;
}

submit.addEventListener('click', (event) => {
  event.preventDefault();
  newValuesForm();
});

function counter2 () {
  const TextAreaLength = textArea.value.length;
  const maxlength = 500;
  counter.innerHTML = maxlength - TextAreaLength;
}

textArea.addEventListener('keypress', counter2);
textArea.addEventListener('keyup', counter2);
