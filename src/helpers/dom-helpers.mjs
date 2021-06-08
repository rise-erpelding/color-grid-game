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

function resetForm() {
  const form = document.querySelector('.cmp-color-form');
  form.reset();
}

function removeGameElements() {
  clearGridContainer();
  // maybe remove these?
  // removeElementByClass('.play-button');
  // removeElementByClass('.winner-header');
}

function addCSSProperty(name, value) {
  const root = document.querySelector(':root');
  root.style.setProperty(name, value);
}

function updateParagraphText(message) {
  const paragraph = document.querySelector('.cmp-header__paragraph');
  paragraph.innerHTML = message;
}

function setSizeCustomProperty(size) {
  const root = document.querySelector(':root');
  root.style.setProperty('--size', size);
}

export {
  removeElementByClass,
  removeChildren,
  clearGridContainer,
  hideForm,
  showForm,
  resetForm,
  removeGameElements,
  addCSSProperty,
  updateParagraphText,
  setSizeCustomProperty,
};
