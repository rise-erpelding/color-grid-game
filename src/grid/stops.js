const { checkRGBValidity } = require('../color-utils');

const makeStops = (size, startVal, endVal) => {
  // confirm that we're given a valid integer between 0 and 255, inclusive
  if (!checkRGBValidity(startVal) || !checkRGBValidity(endVal) || !Number.isInteger(startVal) || !Number.isInteger(endVal)) {
    throw new Error('not a valid startVal or endVal')
  }
  const stops = new Array(size);
  const lastElement = size - 1;
  // make the first element the startVal
  stops[0] = startVal;
  // make the last element the endVal
  stops[lastElement] = endVal;
  // if the array size is 2 then we're done, return stops
  if (size === 2)  return stops;

  const stepVal = (endVal - startVal)/(size - 1) || 0;

  // start from what the second value should be since we already have the first
  let currVal = startVal + stepVal;
  // add the middle values to the array
  for (let i = 1; i < size - 1; i++) {
    stops[i] = Math.round(currVal);
    currVal = currVal + stepVal;
  }
  return stops;
}

module.exports = {
  makeStops
}
