import { startApp, restartApp } from './initial-app';
import { startPreGame } from './pre-game';
import { startGame } from './start-game';

const buttons = {
  backToForm: {
    name: 'back to form',
    innerHTML: '< Change Grid',
    description: 'edit grid',
    className: 'cmp-navigation__back-to-form-button',
    callBack: startApp,
  },
  restartGame: {
    name: 'restart game',
    innerHTML: 'Restart Game',
    description: 'restart game with this grid',
    className: 'cmp-navigation__restart-game-button',
    callBack: startPreGame,
  },
  play: {
    name: 'play',
    innerHTML: 'Start Game >',
    description: 'play game with this grid',
    className: 'cmp-navigation__play-button',
    callBack: startGame,
  },
  newGame: {
    name: 'new game',
    innerHTML: 'New Game',
    description: 'start over from the beginning',
    className: 'cmp-navigation__new-game-button',
    callBack: restartApp,
  },
};

const preGameButtons = ['backToForm', 'play'];
const gameStateButtons = ['restartGame', 'newGame'];

// eslint-disable-next-line import/prefer-default-export
export { buttons, preGameButtons, gameStateButtons };
