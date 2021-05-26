import { makeGrid } from '../grid/grid';
import { fillColors, resetGame } from '../board/board';
import { clearGridContainer } from '../helpers/dom-helpers';

function getFormData(event) {
  const formData = new FormData(event.target);
  const [topLeft, topRight, bottomLeft, bottomRight, gridSize] = formData.values();
  return [topLeft, topRight, bottomLeft, bottomRight, gridSize];
}

function handleSubmit(event) {
  clearGridContainer();
  event.preventDefault();
  const [topLeft, topRight, bottomLeft, bottomRight, gridSize] = getFormData(event);
  const colorGrid = makeGrid(Number(gridSize), topLeft, topRight, bottomLeft, bottomRight);
  resetGame();
  fillColors(colorGrid);
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
