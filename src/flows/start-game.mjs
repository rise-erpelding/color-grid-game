import {
  duplicateGrid,
  shuffleGrid,
  flattenGrid,
} from '../helpers/grid-helpers';
import {
  updateParagraphText,
} from '../helpers/dom-helpers';
import { setNavButtons } from '../navigation/game-buttons';
import { setAnswerKey, compareWithAnswerKey } from '../board/board';
import { fillColors } from '../board/fillColors';
import { addTileListeners } from '../board/click-tile';
import { buttons, gameStateButtons } from './buttons';

function reRenderGrid(grid) {
  fillColors(grid);
  addTileListeners(grid);
  compareWithAnswerKey(grid);
}

function startGame(grid) {
  setNavButtons(gameStateButtons, buttons);
  updateParagraphText('Put the grid back in order. Click on two tiles to switch their order.');
  setAnswerKey(flattenGrid(grid));
  const duplicatedColorGrid = duplicateGrid(grid);
  const shuffledColorGrid = shuffleGrid(duplicatedColorGrid);
  fillColors(shuffledColorGrid);
  addTileListeners(shuffledColorGrid);
  compareWithAnswerKey(shuffledColorGrid);
}

// eslint-disable-next-line import/prefer-default-export
export { startGame, reRenderGrid };
