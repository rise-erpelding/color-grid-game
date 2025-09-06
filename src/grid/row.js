const { convertHexToRGB, convertRGBToHex } = require('../color-utils');
const { makeStops } = require('./stops');

const makeRow = (length, startColor, endColor) => {
  const row = new Array(length);
  const startColorRGB = convertHexToRGB(startColor);
  const endColorRGB = convertHexToRGB(endColor);

  const rStops = makeStops(length, startColorRGB.r, endColorRGB.r);
  const gStops = makeStops(length, startColorRGB.g, endColorRGB.g);
  const bStops = makeStops(length, startColorRGB.b, endColorRGB.b);

  for (let i = 0; i < row.length; i += 1) {
    row[i] = convertRGBToHex(rStops[i], gStops[i], bStops[i]);
  }

  return row;
};

const makeColorMixRow = (length, modeSelect, startColor, endColor) => {
  const mixPercentageArray = makeStops(length, 0, 100);
  const row = new Array(length);
  for (let i = 0; i < row.length; i += 1) {
    row[i] = `color-mix(in ${modeSelect}, ${startColor} ${100 - mixPercentageArray[i]}%, ${endColor} ${mixPercentageArray[i]}%)`;
  }
  return row;
};

module.exports = {
  makeRow,
  makeColorMixRow,
};
