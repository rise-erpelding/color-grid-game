import { makeGrid } from './grid/grid';
import { fillColors, resetGame } from './board/board';

function clearGridContainer() {
  const container = document.getElementsByClassName('grid-container')[0];
  container.innerHTML = '';
}

function handleSubmit(event) {
  clearGridContainer();
  event.preventDefault();
  const formData = new FormData(event.target);
  const [topLeft, topRight, bottomLeft, bottomRight, gridSize] = formData.values();
  const colorGrid = makeGrid(Number(gridSize), topLeft, topRight, bottomLeft, bottomRight);
  resetGame();
  fillColors(colorGrid);
}

const form = document.getElementsByClassName('color-form')[0];
form.addEventListener('submit', handleSubmit);
