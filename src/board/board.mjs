/* eslint-disable no-use-before-define */
import { checkForWin } from './game-evaluations';
import {
  duplicateGrid,
  shuffleGrid,
  flattenGrid,
  flatToMultiDimensional,
} from '../helpers/grid-helpers';
import {
  removeElementByClass,
  removeChildren,
  hideForm,
} from '../helpers/dom-helpers';
import { makeDefaultGrid } from '../form/form-defaults';

let flatAnswerKey = null;
let currentFlatGrid = null;
let gameStarted = false;
let initialClick = null;

function resetGame() {
  flatAnswerKey = null;
}

function addPlayButton(grid) {
  // removes any existing play buttons or winning messages before adding button
  removeElementByClass('.play-button');
  removeElementByClass('.winner-header');
  const playButton = document.createElement('button');
  playButton.innerHTML = 'Play game with this grid';
  playButton.classList.add('play-button');
  const container = document.querySelector('.cmp-color-grid');
  container.after(playButton);
  playButton.addEventListener('click', () => {
    startGame(grid);
  });
}

function startGame(grid) {
  // remove the shuffle button
  const playButton = document.querySelector('.play-button');
  playButton.remove();
  hideForm();
  gameStarted = true;
  flatAnswerKey = flattenGrid(grid);
  const duplicatedColorGrid = duplicateGrid(grid);
  const shuffledColorGrid = shuffleGrid(duplicatedColorGrid);
  fillColors(shuffledColorGrid);
}

function fillColors(grid) {
  let currentGrid;
  if (!grid) {
    currentGrid = makeDefaultGrid();
  } else {
    currentGrid = grid;
  }
  const container = document.getElementsByClassName('cmp-color-grid')[0];
  container.style.setProperty('--size', currentGrid.length);
  removeChildren(container);
  currentGrid.forEach((row, rowIndex) => {
    const colorRow = document.createElement('div');
    colorRow.classList.add('cmp-color-grid__row');
    container.appendChild(colorRow);
    row.forEach((color, tileIndex) => {
      const colorTile = document.createElement('div');
      colorRow.appendChild(colorTile);
      colorTile.style.backgroundColor = color;
      colorTile.classList.add('cmp-color-grid__tile');
      colorTile.classList.add(`cmp-color-grid__tile--${rowIndex * currentGrid.length + tileIndex}`);
      colorTile.addEventListener('click', (e) => {
        if (gameStarted && !colorTile.classList.contains('cmp-color-grid__tile--correct')) {
          handleClickTile(e, rowIndex * currentGrid.length + tileIndex);
        }
      });
    });
  });
  if (!flatAnswerKey) {
    addPlayButton(currentGrid);
  } else {
    currentFlatGrid = flattenGrid(currentGrid);
    checkForWin(currentFlatGrid, flatAnswerKey);
  }
}

// allowing clicking
function handleClickTile(e, tileIndex) {
  e.preventDefault();
  // check to see if initialClick is still null, ie not a number
  if (typeof initialClick !== 'number') {
    initialClick = tileIndex;
    const tile = document.querySelector(`.cmp-color-grid__tile--${tileIndex}`);
    tile.classList.add('cmp-color-grid__tile--first-click');
  } else {
    switchTiles(initialClick, tileIndex);
  }
}

function switchTiles(firstIndex, secondIndex) {
  const grid = currentFlatGrid;
  // save this as a placeholder because we're about to change grid[firstIndex]
  const firstColor = grid[firstIndex];
  grid[firstIndex] = grid[secondIndex];
  grid[secondIndex] = firstColor;
  // set firstClick back to null so we can repeat the process with the next two clicks
  initialClick = null;
  // re-render the grid with fillColors
  currentFlatGrid = grid;
  fillColors(flatToMultiDimensional(grid));
}

export { fillColors, resetGame };
