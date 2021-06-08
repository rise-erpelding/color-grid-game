import {
  flattenGrid,
  flatToMultiDimensional,
} from '../helpers/grid-helpers';
import { reRenderGrid } from '../flows/start-game';

let initialClick = null;

function switchTiles(firstIndex, secondIndex, currentGrid) {
  const flatGrid = flattenGrid(currentGrid);
  const savedColor = flatGrid[firstIndex];
  flatGrid[firstIndex] = flatGrid[secondIndex];
  flatGrid[secondIndex] = savedColor;
  initialClick = null;
  reRenderGrid(flatToMultiDimensional(flatGrid));
}

function handleClickTile(e, tileIndex, grid) {
  e.preventDefault();
  if (!initialClick) {
    initialClick = tileIndex;
    const tile = document.querySelector(`.cmp-color-grid__tile[data-tile-number = '${tileIndex}'`);
    tile.classList.add('cmp-color-grid__tile--first-click');
  } else {
    switchTiles(initialClick, tileIndex, grid);
  }
}

function addTileListeners(grid) {
  const tiles = document.querySelectorAll('.cmp-color-grid__tile');
  tiles.forEach((tile, index) => {
    tile.addEventListener('click', (e) => {
      if (!tile.classList.contains('cmp-color-grid__tile--correct')) {
        handleClickTile(e, index, grid);
      }
    });
  });
}

// eslint-disable-next-line import/prefer-default-export
export { addTileListeners };
