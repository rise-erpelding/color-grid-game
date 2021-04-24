function handleWinner() {
  const container = document.querySelector('.grid-container');
  const winnerHeader = document.createElement('h2');
  winnerHeader.classList.add('winner-header');
  winnerHeader.innerHTML = 'You win!';
  container.after(winnerHeader);
}

function markTileCorrect(tileIndex) {
  const tile = document.querySelector(`.color-tile-${tileIndex}`);
  // TODO: style this class later
  tile.classList.add('u-tile-correct');
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
    handleWinner();
  }
}

// default export doesn't work currently
// eslint-disable-next-line import/prefer-default-export
export { checkForWin };
