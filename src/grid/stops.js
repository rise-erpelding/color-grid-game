const { isInteger } = require('../color-utils');

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

module.exports = {
  makeStops,
};
