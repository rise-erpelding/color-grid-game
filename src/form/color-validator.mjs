const colors = {
  'top-left': '#ffffff',
  'top-right': '#ffffff',
  'bottom-left': '#ffffff',
  'bottom-right': '#ffffff',
};

function enableSubmit() {
  const submitButton = document.querySelector('.cmp-color-form__submit');
  submitButton.removeAttribute('disabled');
}

function validateColors() {
  const colorValues = Object.values(colors);
  const colorsFrequency = {};
  // create a frequency table to see how many times each color appears
  colorValues.forEach((colorValue) => {
    colorsFrequency[colorValue] = (colorsFrequency[colorValue] || 0) + 1;
  });
  // gives an array with numbers of times each color appears
  const frequencies = Object.values(colorsFrequency);
  // look for numbers greater than 1, if there are none, then enable submit
  if (!frequencies.find((num) => num > 1)) {
    enableSubmit();
  }
}

function setColors(color, position) {
  colors[position] = color;
  validateColors();
}

function addInputListeners() {
  const colorForm = document.querySelector('.cmp-color-form');
  colorForm.addEventListener('input', (event) => {
    setColors(event.target.value, event.target.id);
  });
}

function disableSubmitButtonUntilColorsPicked() {
  addInputListeners();
  const submitButton = document.querySelector('.cmp-color-form__submit');
  submitButton.setAttribute('disabled', '');
}

// eslint-disable-next-line import/prefer-default-export
export { disableSubmitButtonUntilColorsPicked, enableSubmit };
