import { fillColors, resetGame } from '../board/board';
import { hideForm } from '../helpers/dom-helpers';

function initGameMode() {
  hideForm();
  resetGame();
  fillColors();
}

// eslint-disable-next-line import/prefer-default-export
export { initGameMode };
