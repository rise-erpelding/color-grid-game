// contains functions to duplicate, flatten, unflatten, and shuffle the grid

function duplicateGrid(grid) {
  const result = [];
  grid.forEach((row, gridIndex) => {
    const newRow = [];
    row.forEach((color, rowIndex) => {
      newRow[rowIndex] = color;
    });
    result[gridIndex] = newRow;
  });
  return result;
}

function flattenGrid(grid) {
  const result = [];
  grid.forEach((row) => {
    row.forEach((color) => {
      result.push(color);
    });
  });
  return result;
}

function shuffle(arr) { // Fisher-Yates shuffle
  for (let i = arr.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    // eslint-disable-next-line no-param-reassign
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function flatToMultiDimensional(flatGrid) {
  const rowSize = Math.sqrt(flatGrid.length);
  const multiDimensionalGrid = new Array(rowSize);
  for (let i = 0; i < multiDimensionalGrid.length; i += 1) {
    multiDimensionalGrid[i] = new Array(rowSize);
  }

  let outerIndex = 0;
  let innerIndex = 0;
  for (let i = 0; i < flatGrid.length; i += 1) {
    multiDimensionalGrid[outerIndex][innerIndex] = flatGrid[i];
    innerIndex += 1;
    if (innerIndex % rowSize === 0) {
      outerIndex += 1;
      innerIndex = 0;
    }
  }
  return multiDimensionalGrid;
}

function getCorners(flatGrid) {
  const gridSize = Math.sqrt(flatGrid.length);
  return {
    topLeft: {
      flatGridIndex: 0,
      color: flatGrid[0],
    },
    topRight: {
      flatGridIndex: gridSize - 1,
      color: flatGrid[gridSize - 1],
    },
    bottomLeft: {
      flatGridIndex: flatGrid.length - gridSize,
      color: flatGrid[flatGrid.length - gridSize],
    },
    bottomRight: {
      flatGridIndex: flatGrid.length - 1,
      color: flatGrid[flatGrid.length - 1],
    },
  };
}

function removeCornersFromFlatGrid(flatGrid, corners) {
  const cornerPositionNamesReversed = Object.keys(corners).reverse();
  cornerPositionNamesReversed.forEach((positionName) => {
    const indexToDelete = corners[positionName].flatGridIndex;
    flatGrid.splice(indexToDelete, 1);
  });
}

function addCornersToFlatGrid(shuffledFlatGrid, corners) {
  const cornerPositionNames = Object.keys(corners);
  cornerPositionNames.forEach((positionName) => {
    const indexToInsertAt = corners[positionName].flatGridIndex;
    const colorToInsert = corners[positionName].color;
    shuffledFlatGrid.splice(indexToInsertAt, 0, colorToInsert);
  });
}

function shuffleGrid(grid) {
  const flatGrid = flattenGrid(grid);
  const corners = getCorners(flatGrid);
  removeCornersFromFlatGrid(flatGrid, corners);
  const shuffledFlatGrid = shuffle(flatGrid);
  addCornersToFlatGrid(shuffledFlatGrid, corners);
  return flatToMultiDimensional(shuffledFlatGrid);
}

module.exports = {
  duplicateGrid,
  flattenGrid,
  shuffleGrid,
  flatToMultiDimensional,
  shuffle,
};
