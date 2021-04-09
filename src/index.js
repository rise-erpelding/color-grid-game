console.log('hello!!!!!')

const form = document.getElementById('color-form');
form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  clearGridContainer();
  event.preventDefault();
  const topLeft = addHash(document.getElementById('top-left').value);
  const topRight = addHash(document.getElementById('top-right').value);
  const bottomLeft = addHash(document.getElementById('bottom-left').value);
  const bottomRight = addHash(document.getElementById('bottom-right').value);
  const gridSize = document.getElementById('grid-size').value;
  
  console.log(topLeft, topRight, bottomLeft, bottomRight, gridSize);
  const colorGrid = makeGrid(gridSize, topLeft, topRight, bottomLeft, bottomRight);
  console.log(colorGrid);
  fillColors(colorGrid);
}

function clearGridContainer() {
  const container = document.getElementById('grid-container');
  container.innerHTML = '';
}

// probably some better validation for the hex values on this side of things would be nice too

function addHash(str) {
  return str.startsWith('#') ? str : '#' + str;
}

function fillColors(grid) {
  console.log('fill colors ran');
  const container = document.getElementById('grid-container');
  grid.forEach((row) => {
    const newRowDiv = document.createElement('div');
    newRowDiv.classList.add('color-row');
    container.appendChild(newRowDiv);
    row.forEach((color, index) => {
      const newColorDiv = document.createElement('div');
      newRowDiv.appendChild(newColorDiv);
      newColorDiv.style.backgroundColor = color;
      newColorDiv.classList.add('color-tile');
    });
  });
}
