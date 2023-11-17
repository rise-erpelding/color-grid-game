const { isInteger, calculateMidpointHue } = require('../color-utils');

const checkSize = (size) => {
  if (typeof size !== 'number') {
    throw new TypeError('size must be a number');
  }
  if (size < 2) {
    throw new Error('size must be at least 2');
  }
  if (!isInteger(size)) {
    throw new Error('size must be an integer');
  }
};

const makeStops = (size, startVal, endVal) => {
  checkSize(size);

  const stops = [];
  const lastElement = size - 1;
  // make the first element the startVal
  stops[0] = startVal;
  // make the last element the endVal
  stops[lastElement] = endVal;
  const stepVal = (endVal - startVal) / (size - 1) || 0;

  // start from what the second value should be since we already have the first
  let currVal = startVal + stepVal;
  // add the middle values to the array
  for (let i = 1; i <= size - 2; i += 1) {
    stops[i] = Math.round(currVal);
    currVal += stepVal;
  }
  return stops;
};

const isEven = (number) => number % 2 === 0;

// TODO: tests
const makeStopsWithGivenMidpoint = (size, startVal, midpointVal, endVal) => {
  // basically ensures that if we have an even # size, we round up
  const middleIndex = Math.ceil((size - 1) / 2);
  const middleArraySize = middleIndex + 1;

  const firstArray = makeStops(middleArraySize, startVal, midpointVal);
  const secondArray = makeStops(middleArraySize, midpointVal, endVal);

  // prepare the two arrays to be concatenated
  // handle odd and even sizes differently
  if (isEven(size)) { // even
    // cut out the midpoint altogether from each array
    // instead values will approach that midpoint
    firstArray.pop(); // cut last from first array
    secondArray.shift(); // cut first from second array
  } else { // odd
    // remove only the first element from the secondArray since it exists in both
    secondArray.shift();
  }
  const stops = firstArray.concat(secondArray);
  return stops;
}

const makeHueStops = (size, startVal, endVal) => {
  // basically ensures that if we have an even # size, we round up
  const middleIndex = Math.ceil((size - 1) / 2);
  const midpointVal = calculateMidpointHue(startVal, endVal);
  const middleArraySize = middleIndex + 1;

  const firstArray = makeStops(middleArraySize, startVal, midpointVal);
  const secondArray = makeStops(middleArraySize, midpointVal, endVal);

  // prepare the two arrays to be concatenated
  // handle odd and even sizes differently
  if (isEven(size)) { // even
    // cut out the midpoint altogether from each array
    // instead values will approach that midpoint
    firstArray.pop(); // cut last from first array
    secondArray.shift(); // cut first from second array
  } else { // odd
    // remove only the first element from the secondArray since it exists in both
    secondArray.shift();
  }
  const stops = firstArray.concat(secondArray);
  return stops;
};

module.exports = {
  makeStops,
  makeHueStops,
  makeStopsWithGivenMidpoint,
};
