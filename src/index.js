const { makeGrid } = require('./grid/grid');

function clearGridContainer() {
  const container = document.getElementById('grid-container');
  container.innerHTML = '';
}

function fillColors(grid) {

  const container = document.getElementById('grid-container');
  // sets the variable
  container.style.setProperty('--size', grid.length);
  grid.forEach((row) => {
    const newRowDiv = document.createElement('div');
    newRowDiv.classList.add('color-row');
    container.appendChild(newRowDiv);
    row.forEach((color) => {
      const newColorDiv = document.createElement('div');
      newRowDiv.appendChild(newColorDiv);
      newColorDiv.style.backgroundColor = color;
      newColorDiv.classList.add('color-tile');
    });
  });
}

function handleSubmit(event) {
  clearGridContainer();
  event.preventDefault();
  const formData = new FormData(event.target);
  const [topLeft, topRight, bottomLeft, bottomRight, gridSize] = formData.values();
  const colorGrid = makeGrid(Number(gridSize), topLeft, topRight, bottomLeft, bottomRight);
  fillColors(colorGrid);
}

const form = document.getElementById('color-form');
form.addEventListener('submit', handleSubmit);

// probably some better validation for the hex values on this side of things would be nice too

// function addHash(str) {
//   return str.startsWith('#') ? str : '#' + str;
// }
