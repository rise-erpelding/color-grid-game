import { makeGrid } from './grid/grid';
import { fillColors, resetGame } from './board/board';

function clearGridContainer() {
  const container = document.getElementsByClassName('cmp-color-grid')[0];
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

const form = document.getElementsByClassName('cmp-color-form')[0];
form.addEventListener('submit', handleSubmit);
