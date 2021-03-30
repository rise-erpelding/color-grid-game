const { makeRow } = require('./row');

const makeGrid = (gridSize, topLeftColor, topRightColor, bottomLeftColor, bottomRightColor) => {
  const grid = new Array(gridSize);
  const firstRow = 0;
  const lastRow = gridSize - 1;
  grid[firstRow] = makeRow(gridSize, topLeftColor, topRightColor);
  grid[lastRow] = makeRow(gridSize, bottomLeftColor, bottomRightColor);
  
  // loop over each index and make an array representing the column
  for (let i = 0; i < gridSize; i++) {
    let column = makeRow(gridSize, grid[firstRow][i], grid[lastRow][i]);
    for (let j = 1; j < lastRow; j++) {
      // if grid[j] doesn't exist yet create it 
      if (!grid[j]) {
        grid[j] = [];
      }
      // take j index of column and set it to the i index in the array that is the j index
      grid[j][i] = column[j];
    }
  }
  return grid;
}

module.exports = {
  makeGrid
}
