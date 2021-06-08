import { removeChildren } from '../helpers/dom-helpers';

function fillColors(grid) {
  const container = document.querySelector('.cmp-color-grid');
  removeChildren(container);
  grid.forEach((row, rowIndex) => {
    const colorRow = document.createElement('div');
    colorRow.classList.add('cmp-color-grid__row');
    container.appendChild(colorRow);
    row.forEach((color, tileIndex) => {
      const colorTile = document.createElement('div');
      const tileNumber = rowIndex * grid.length + tileIndex;
      colorRow.appendChild(colorTile);
      colorTile.style.backgroundColor = color;
      colorTile.classList.add('cmp-color-grid__tile');
      colorTile.dataset.tileNumber = tileNumber;
    });
  });
}

// eslint-disable-next-line import/prefer-default-export
export { fillColors };
