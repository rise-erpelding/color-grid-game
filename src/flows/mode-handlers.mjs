import { initGameMode } from './game-mode';
import { initSandboxMode } from './sandbox-mode';

const addListener = (className, initMode) => document.querySelector(className).addEventListener('click', initMode);

const addGameModeListener = () => addListener('.navigation__button--game', initGameMode);

const addSandboxModeListener = () => addListener('.navigation__button--sandbox', initSandboxMode);

function addButtonListeners() {
  addSandboxModeListener();
  addGameModeListener();
}

// eslint-disable-next-line import/prefer-default-export
export { addButtonListeners };
