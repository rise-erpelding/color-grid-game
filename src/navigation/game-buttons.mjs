function createButton(buttonType) {
  const button = document.createElement('button');
  button.innerHTML = buttonType.innerHTML;
  button.setAttribute('title', buttonType.description);
  button.classList.add('cmp-button');
  button.classList.add(buttonType.className);
  return button;
}

function removeButton(buttonType) {
  const button = document.querySelector(`.${buttonType.className}`);
  if (button) {
    button.removeEventListener('click', buttonType.callBack);
    button.remove();
  }
}

function addButtonClickListener(buttonType, grid) {
  const button = document.querySelector(`.${buttonType.className}`);
  if (grid) {
    button.addEventListener('click', () => buttonType.callBack(grid));
  } else {
    // but why??
    button.addEventListener('click', buttonType.callBack);
    // i guess i can do this
    // button.addEventListener('click', () => buttonType.callBack(grid));
  }
}

function addButtonToNav(button) {
  const navigation = document.querySelector('.cmp-navigation');
  navigation.appendChild(button);
}

function addButton(buttonInfo, grid) {
  const button = createButton(buttonInfo);
  addButtonToNav(button);
  addButtonClickListener(buttonInfo, grid);
}

function addButtonList(buttonsList, buttonInfo, grid) {
  buttonsList.forEach((buttonType) => {
    addButton(buttonInfo[buttonType], grid);
  });
}

function removeButtonList(buttonsList, buttonInfo) {
  buttonsList.forEach((buttonType) => {
    removeButton(buttonInfo[buttonType]);
  });
}

function setNavButtons(buttonsList, buttonInfo, grid) {
  const allButtonsList = Object.keys(buttonInfo);
  const buttonsToRemove = [];
  allButtonsList.forEach((buttonType) => {
    if (!buttonsList.includes(buttonType)) {
      buttonsToRemove.push(buttonType);
    }
  });
  addButtonList(buttonsList, buttonInfo, grid);
  removeButtonList(buttonsToRemove, buttonInfo);
}

export {
  // eslint-disable-next-line import/prefer-default-export
  setNavButtons,
};
