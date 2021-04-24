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
} from '../helpers/dom-helpers';

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
  const container = document.querySelector('.grid-container');
  container.after(playButton);
  playButton.addEventListener('click', () => {
    startGame(grid);
  });
}

function startGame(grid) {
  // remove the shuffle button
  const playButton = document.querySelector('.play-button');
  playButton.remove();
  gameStarted = true;
  flatAnswerKey = flattenGrid(grid);
  const duplicatedColorGrid = duplicateGrid(grid);
  const shuffledColorGrid = shuffleGrid(duplicatedColorGrid);
  fillColors(shuffledColorGrid);
}

function fillColors(grid) {
  const container = document.getElementsByClassName('grid-container')[0];
  container.style.setProperty('--size', grid.length);
  removeChildren(container);
  grid.forEach((row, rowIndex) => {
    const colorRow = document.createElement('div');
    colorRow.classList.add('color-row');
    container.appendChild(colorRow);
    row.forEach((color, tileIndex) => {
      const colorTile = document.createElement('div');
      colorRow.appendChild(colorTile);
      colorTile.style.backgroundColor = color;
      colorTile.classList.add('color-tile');
      colorTile.classList.add(`color-tile-${rowIndex * grid.length + tileIndex}`);
      colorTile.addEventListener('click', (e) => {
        if (gameStarted && !colorTile.classList.contains('u-tile-correct')) {
          handleClickTile(e, rowIndex * grid.length + tileIndex);
        }
      });
    });
  });
  if (!flatAnswerKey) {
    addPlayButton(grid);
  } else {
    currentFlatGrid = flattenGrid(grid);
    checkForWin(currentFlatGrid, flatAnswerKey);
  }
}

// allowing clicking
function handleClickTile(e, tileIndex) {
  e.preventDefault();
  // check to see if initialClick is still null, ie not a number
  if (typeof initialClick !== 'number') {
    initialClick = tileIndex;
    const tile = document.querySelector(`.color-tile-${tileIndex}`);
    // TODO: adding this to change the style of this class later
    tile.classList.add('u-tile-first-click');
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
