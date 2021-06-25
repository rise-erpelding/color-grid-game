import { enableSubmit } from './color-validator';

const themes = [
// [topleft, topright, bottomleft, bottomright],
  ['#ef476f', '#ffd166', '#06d6ad', '#118ab2'],
  ['#f15bb5', '#fee440', '#00bbf9', '#00f5d4'],
  ['#03045e', '#0077b6', '#00b4d8', '#90e0ef'],
  ['#006466', '#144552', '#272640', '#4d194d'],
  ['#355070', '#6d597a', '#e56b6f', '#eaac8b'],
  ['#ffbe0b', '#fb5607', '#ff006e', '#8338ec'],
  ['#ff6d00', '#ff9e00', '#240046', '#9d4edd'],
  ['#99e264', '#036666', '#07beb8', '#c4fff9'],
  ['#b7094c', '#0091ad', '#feecf3', '#ebfcff'],
  ['#b7094c', '#0091ad', '#feecf3', '#ebfcff'],
  ['#22577a', '#38a3a5', '#80ed99', '#57cc99'],
  ['#0a0908', '#22333b', '#a9927d', '#f2f4f3'],
  ['#fe7f2d', '#fcca46', '#233d4d', '#a1c181'],
  ['#574ae2', '#222a68', '#ab81cd', '#654597'],
  ['#392f5a', '#f092dd', '#eec8e0', '#ffaff0'],
  ['#fa7921', '#fe9920', '#b9a44c', '#566e3d'],
  ['#b6d094', '#e1aa7d', '#6a2e35', '#be8a60'],
  ['#007bff', '#01563e', '#ae00ff', '#eeff00'],
  ['#eac435', '#345995', '#03cea4', '#fb4d3d'],
  ['#1a181b', '#564d65', '#3e8989', '#2cda9d'],
  ['#dc1535', '#e9b320', '#43865b', '#3e2135'],
  ['#f2f4f6', '#1ee3cf', '#6b48ff', '#0d3f67'],
  ['#e41749', '#f5587b', '#ff8a5c', '#fff591'],
  ['#de4307', '#f29c2b', '#f6d04d', '#8bc24c'],
  ['#de6449', '#791e94', '#fffff2', '#41d3bd'],
  ['#996699', '#cccccc', '#000000', '#006699'],
  ['#03243a', '#558ad8', '#c5c5c5', '#74c239'],
  ['#fffff5', '#ffda8e', '#80d4f6', '#5c196b'],
  ['#d94e67', '#f2d8a7', '#a68572', '#73503c'],
  ['#379392', '#4fb0c6', '#4f86c6', '#6c49b8'],
  ['#ffcad4', '#b0d0d3', '#c08497', '#f7af9d'],
];

const inputIds = ['top-left', 'top-right', 'bottom-left', 'bottom-right'];

function setFormValue(id, value) {
  document.getElementById(id).value = value;
}

function getRandomItem(arr) {
  const randomIndex = Math.floor(Math.random() * (arr.length - 1));
  return arr[randomIndex];
}

function fillWithSurpriseTheme() {
  const surpriseTheme = getRandomItem(themes);
  surpriseTheme.forEach((color, index) => {
    setFormValue(inputIds[index], color);
    enableSubmit();
  });
}

function addSurpriseMeListener() {
  const button = document.querySelector('.cmp-color-form__surprise-me');
  button.addEventListener('click', fillWithSurpriseTheme);
}

// eslint-disable-next-line import/prefer-default-export
export { addSurpriseMeListener };
