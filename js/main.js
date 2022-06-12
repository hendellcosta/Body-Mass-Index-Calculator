const form = document.querySelector('#form');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const inputWeight = e.target.querySelector('#weight');
  const inputHeight = e.target.querySelector('#height');

  const weight = Number(inputWeight.value);
  const height = Number(inputHeight.value);

  const bmi = getBmi(weight, height);
  const bmiLevel = getBmiLevel(bmi);

  const msg = `Your BMI is ${bmi} (${bmiLevel}).`;

  setResult(msg, true);
});

function getBmiLevel(bmi) {
  const level = ['Under weight', 'Normal weight', 'Overweight',
    'Obesity Grade 1', 'Obesity Grade 2', 'Obesity Grade 3'];

  if (bmi >= 39.9) return level[5];
  if (bmi >= 34.9) return level[4];
  if (bmi >= 29.9) return level[3];
  if (bmi >= 24.9) return level[2];
  if (bmi >= 18.5) return level[1];
  if (bmi < 18.5) return level[0];
}

function getBmi (weight, height) {
  const bmi = weight / height ** 2;
  return bmi.toFixed(2);
}

function createP () {
  const p = document.createElement('p');
  return p;
}

function setResult (msg, isValid) {
  const result = document.querySelector('#calculation');
  result.innerHTML = '';

  const p = createP();

  if (isValid) {
    p.classList.add('p-result');
  } else {
    p.classList.add('bad');
  }

  p.innerHTML = msg;
  result.appendChild(p);
}