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

function addCSSProperty(name, value) {
  const root = document.querySelector(':root');
  root.style.setProperty(name, value);
}

export { removeElementByClass, removeChildren, addCSSProperty };
