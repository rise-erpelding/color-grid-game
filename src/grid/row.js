const {
  convertHexToRGB,
  convertRGBToHex,
  checkRGBValidity,
  isInteger,
  convertRGBToHSL,
  convertHSLToRGB,
  calculateMidpointHue,
} = require('../color-utils');
const { makeStops, makeStopsWithGivenMidpoint } = require('./stops');

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

const makeRow = (length, startColor, endColor, hslOn) => {
  const row = new Array(length);
  const startColorRGB = convertHexToRGB(startColor);
  const endColorRGB = convertHexToRGB(endColor);

  if (hslOn) {
    // convert to hsl first to convert h, s, l vals instead of r, g, b vals
    const startColorHSL = convertRGBToHSL(startColorRGB.r, startColorRGB.g, startColorRGB.b);
    const endColorHSL = convertRGBToHSL(endColorRGB.r, endColorRGB.g, endColorRGB.b);

    const midpointHue = calculateMidpointHue(startColorHSL.h, endColorHSL.h);
    const midpointSaturation = Math.ceil((startColorHSL.s + endColorHSL.s) / 2);
    const midpointLightness = Math.ceil((startColorHSL.l + endColorHSL.l) / 2);
    const midpointRGB = convertHSLToRGB(midpointHue, midpointSaturation, midpointLightness);

    const rStops = makeStopsWithGivenMidpoint(
      length,
      startColorRGB.r,
      midpointRGB.r,
      endColorRGB.r,
    );
    const gStops = makeStopsWithGivenMidpoint(
      length,
      startColorRGB.g,
      midpointRGB.g,
      endColorRGB.g,
    );
    const bStops = makeStopsWithGivenMidpoint(
      length,
      startColorRGB.b,
      midpointRGB.b,
      endColorRGB.b,
    );

    for (let i = 0; i < row.length; i += 1) {
      row[i] = convertRGBToHex(rStops[i], gStops[i], bStops[i]);
    }
  } else {
    checkRGBValues(startColorRGB, endColorRGB);

    const rStops = makeStops(length, startColorRGB.r, endColorRGB.r);
    const gStops = makeStops(length, startColorRGB.g, endColorRGB.g);
    const bStops = makeStops(length, startColorRGB.b, endColorRGB.b);

    for (let i = 0; i < row.length; i += 1) {
      row[i] = convertRGBToHex(rStops[i], gStops[i], bStops[i]);
    }
  }
  return row;
};

module.exports = {
  makeRow,
};
