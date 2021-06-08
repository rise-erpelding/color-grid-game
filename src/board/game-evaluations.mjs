import { startPostGame } from '../flows/post-game';

function markTileCorrect(tileIndex) {
  const tile = document.querySelector(`.cmp-color-grid__tile[data-tile-number = '${tileIndex}'`);
  tile.classList.add('cmp-color-grid__tile--correct');
}

function checkForWin(currentGrid, answerKey) {
  let numberOfCorrectTiles = 0;
  for (let i = 0; i < answerKey.length; i += 1) {
    if (answerKey[i] === currentGrid[i]) {
      numberOfCorrectTiles += 1;
      markTileCorrect(i);
    }
  }
  if (numberOfCorrectTiles === currentGrid.length) {
    startPostGame();
  }
}

// default export doesn't work currently
// eslint-disable-next-line import/prefer-default-export
export { checkForWin };
