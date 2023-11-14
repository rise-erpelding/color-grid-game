/* eslint-disable import/no-cycle */
import { makeGrid } from '../grid/grid';
import { startPreGame } from '../flows/pre-game';

function getFormData(event) {
  const formData = new FormData(event.target);
  const [topLeft, topRight, bottomLeft, bottomRight, gridSize, colorMode] = formData.values();
  return [topLeft, topRight, bottomLeft, bottomRight, gridSize, colorMode];
}

function handleSubmit(event) {
  event.preventDefault();
  const [topLeft, topRight, bottomLeft, bottomRight, gridSize, colorMode] = getFormData(event);
  const colorGrid = makeGrid(
    Number(gridSize),
    topLeft,
    topRight,
    bottomLeft,
    bottomRight,
    colorMode,
  );
  startPreGame(colorGrid);
}

function addFormListener() {
  const form = document.getElementsByClassName('cmp-color-form')[0];
  form.addEventListener('submit', handleSubmit);
}

// eslint-disable-next-line import/prefer-default-export
export {
  addFormListener,
  getFormData,
};
