const {
  convertHexToRGB,
  convertRGBToHex,
  checkRGBValidity,
  isInteger,
  convertRGBToHSL,
  convertHSLToRGB,
} = require('../color-utils');
const { makeStops } = require('./stops');

const checkRGBValues = (startColor, endColor) => {
  const validateColorValue = (color, component) => {
    if (!checkRGBValidity(color[component]) || !isInteger(color[component])) {
      throw new Error(`invalid color value: check ${component}`);
    }
  };

  ['r', 'b', 'g'].forEach((component) => {
    validateColorValue(startColor, component);
    validateColorValue(endColor, component);
  });
};

const makeRow = (length, startColor, endColor, hslMode) => {
  const row = new Array(length);
  const startColorRGB = convertHexToRGB(startColor);
  const endColorRGB = convertHexToRGB(endColor);
  checkRGBValues(startColorRGB, endColorRGB);

  if (hslMode === 'hsl') {
    // convert to hsl first to convert h, s, l vals instead of r, g, b vals
    const startColorHSL = convertRGBToHSL(startColorRGB.r, startColorRGB.g, startColorRGB.b);
    const endColorHSL = convertRGBToHSL(endColorRGB.r, endColorRGB.g, endColorRGB.b);

    const hStops = makeStops(length, startColorHSL.h, endColorHSL.h);
    const sStops = makeStops(length, startColorHSL.s, endColorHSL.s);
    const lStops = makeStops(length, startColorHSL.l, endColorHSL.l);

    for (let i = 0; i < row.length; i += 1) {
      const { r, g, b } = convertHSLToRGB(hStops[i], sStops[i], lStops[i]);
      row[i] = convertRGBToHex(r, g, b);
    }
  } else if (hslMode === 'rgb') {
    const rStops = makeStops(length, startColorRGB.r, endColorRGB.r);
    const gStops = makeStops(length, startColorRGB.g, endColorRGB.g);
    const bStops = makeStops(length, startColorRGB.b, endColorRGB.b);

    for (let i = 0; i < row.length; i += 1) {
      row[i] = convertRGBToHex(rStops[i], gStops[i], bStops[i]);
    }
  } else {
    // use rgb but find hsl midpoint
    console.log('WHOOPS UNDER CONSTRUCTION, COME BACK LATER');
  }
  return row;
};

module.exports = {
  makeRow,
};
