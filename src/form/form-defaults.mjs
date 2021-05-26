import { makeGrid } from '../grid/grid';

function getFormDefaults() {
  const colorInputs = document.querySelectorAll(".cmp-color-form input[type='color']");
  // this next line needs to be refactored
  // eslint-disable-next-line max-len
  const [topLeft, topRight, bottomLeft, bottomRight] = [colorInputs[0].value, colorInputs[1].value, colorInputs[2].value, colorInputs[3].value];
  const gridSize = document.querySelector('#grid-size').value;
  const formDefaults = {
    topLeft,
    topRight,
    bottomLeft,
    bottomRight,
    gridSize,
  };
  return formDefaults;
}

function makeDefaultGrid() {
  const defaultFormValues = getFormDefaults();
  const {
    gridSize,
    topLeft,
    topRight,
    bottomLeft,
    bottomRight,
  } = defaultFormValues;
  const colorGrid = makeGrid(
    Number(gridSize),
    topLeft,
    topRight,
    bottomLeft,
    bottomRight,
  );
  return colorGrid;
}

// eslint-disable-next-line import/prefer-default-export
export { makeDefaultGrid };
