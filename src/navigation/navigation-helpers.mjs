import { removeElementByClass } from '../helpers/dom-helpers';

function addNavigation() {
  const navigation = document.createElement('nav');
  navigation.classList.add('cmp-navigation');
  const colorGridContainer = document.querySelector('.cmp-color-grid');
  colorGridContainer.after(navigation);
}

function removeNavigation() {
  removeElementByClass('.cmp-navigation');
}

// eslint-disable-next-line import/prefer-default-export
export { addNavigation, removeNavigation };
