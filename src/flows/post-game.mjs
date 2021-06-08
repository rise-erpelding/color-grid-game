import { updateParagraphText } from '../helpers/dom-helpers';

function startPostGame() {
  updateParagraphText('You Win!');
}

// eslint-disable-next-line import/prefer-default-export
export { startPostGame };
