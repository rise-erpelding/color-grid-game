function removeElementByClass(className) {
  // removes the element if it already exists
  const currentElement = document.querySelector(className);
  if (currentElement) currentElement.remove();
}

function removeChildren(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function clearGridContainer() {
  const container = document.getElementsByClassName('cmp-color-grid')[0];
  container.innerHTML = '';
}

function hideForm() {
  const form = document.querySelector('.cmp-color-form');
  form.classList.add('util-hidden');
}

function showForm() {
  const form = document.querySelector('.cmp-color-form');
  form.classList.remove('util-hidden');
}

function removeGameElements() {
  clearGridContainer();
  removeElementByClass('.play-button');
  removeElementByClass('.winner-header');
}

export {
  removeElementByClass,
  removeChildren,
  clearGridContainer,
  hideForm,
  showForm,
  removeGameElements,
};
