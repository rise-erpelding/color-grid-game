import { resetGame } from '../board/board';
import { fillColors } from '../board/fillColors';
import { addNavigation, removeNavigation } from '../navigation/navigation-helpers';
import { setNavButtons } from '../navigation/game-buttons';
import { makeDefaultGrid } from '../form/form-defaults';
import {
  clearGridContainer,
  hideForm,
  updateParagraphText,
  setSizeCustomProperty,
} from '../helpers/dom-helpers';
import { buttons, preGameButtons } from './buttons';

function startPreGame(grid) {
  let currentGrid;
  if (!grid.length) {
    currentGrid = makeDefaultGrid();
  } else {
    currentGrid = grid;
  }
  updateParagraphText('Here is your grid. Want to play a game with this grid?');
  hideForm();
  resetGame();
  removeNavigation();
  addNavigation(); // this must happen before fillColors
  setNavButtons(preGameButtons, buttons, currentGrid);
  clearGridContainer();
  setSizeCustomProperty(currentGrid.length);
  fillColors(currentGrid);
}

// eslint-disable-next-line import/prefer-default-export
export { startPreGame };
