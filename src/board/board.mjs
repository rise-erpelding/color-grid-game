import { checkForWin } from './game-evaluations';
import { flattenGrid } from '../helpers/grid-helpers';

let flatAnswerKey = null;

function resetGame() {
  flatAnswerKey = null;
}

function setAnswerKey(answerKey) {
  flatAnswerKey = answerKey;
}

function compareWithAnswerKey(grid) {
  checkForWin(flattenGrid(grid), flatAnswerKey);
}

export { resetGame, setAnswerKey, compareWithAnswerKey };
