const checkRGBValidity = (num) => {
  if (typeof num !== 'number') {
    throw new TypeError('num must be a number');
  }
  return (num >= 0 && num <= 255);
};

const isInteger = (value) => typeof value === 'number'
    // eslint-disable-next-line no-restricted-globals
    && isFinite(value)
    && Math.floor(value) === value;

const componentToHex = (rgbVal) => {
  if (typeof rgbVal !== 'number') {
    throw new TypeError('rgbVal must be a number');
  }
  if (rgbVal < 0 || rgbVal > 255 || !isInteger(rgbVal)) {
    throw new Error('rgbVal must be an integer between 0 and 255, inclusive');
  }
  const hex = rgbVal.toString(16);
  return hex.length === 1 ? `0${hex}` : hex;
};

const convertRGBToHex = (r, g, b) => `#${componentToHex(r)}${componentToHex(g)}${componentToHex(b)}`;

const convertHexToRGB = (hex) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (result === null) {
    throw new Error('not a valid hex');
  }
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16),
  } : null;
};

const convertRGBToHSL = (r, g, b) => {
  if (!checkRGBValidity(r) || !checkRGBValidity(g) || !checkRGBValidity(b)) {
    throw new Error('rgb values must be between 0 and 255');
  }

  const normalizedR = r / 255;
  const normalizedG = g / 255;
  const normalizedB = b / 255;

  const max = Math.max(normalizedR, normalizedG, normalizedB);
  const min = Math.min(normalizedR, normalizedG, normalizedB);

  let h; let s; const l = (max + min) / 2;

  if (max === min) {
    h = 0; // achromatic
    s = 0; // achromatic
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

    switch (max) {
      case normalizedR:
        h = (normalizedG - normalizedB) / d + (normalizedG < normalizedB ? 6 : 0);
        break;
      case normalizedG:
        h = (normalizedB - normalizedR) / d + 2;
        break;
      case normalizedB:
        h = (normalizedR - normalizedG) / d + 4;
        break;
      default:
        h = 0;
        break;
    }

    h /= 6;
  }

  return {
    h: Math.round(h * 360),
    s: Math.round(s * 100),
    l: Math.round(l * 100),
  };
};

const convertHSLToRGB = (hue, saturation, light) => {
  let h = ((hue % 360) + 360) % 360; // Ensure h is within [0, 360]
  let s = Math.max(0, Math.min(100, saturation)); // Ensure s is within [0, 100]
  let l = Math.max(0, Math.min(100, light)); // Ensure l is within [0, 100]

  // Convert h and s to values in [0, 1]
  h /= 360;
  s /= 100;
  l /= 100;

  // Calculate temporary values
  const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
  const p = 2 * l - q;
  const tr = h + 1 / 3;
  const tg = h;
  const tb = h - 1 / 3;

  // Helper function to convert a temporary value to an RGB component
  const hueToRGB = (t) => {
    let tAdjusted = t;
    if (tAdjusted < 0) tAdjusted += 1;
    if (tAdjusted > 1) tAdjusted -= 1;
    if (tAdjusted < 1 / 6) return p + (q - p) * 6 * tAdjusted;
    if (tAdjusted < 1 / 2) return q;
    if (tAdjusted < 2 / 3) return p + (q - p) * (2 / 3 - tAdjusted) * 6;
    return p;
  };

  // Calculate the RGB components
  const r = Math.round(hueToRGB(tr) * 255);
  const g = Math.round(hueToRGB(tg) * 255);
  const b = Math.round(hueToRGB(tb) * 255);

  return { r, g, b };
};

module.exports = {
  checkRGBValidity,
  convertRGBToHex,
  convertHexToRGB,
  convertRGBToHSL,
  convertHSLToRGB,
  componentToHex,
  isInteger,
};
