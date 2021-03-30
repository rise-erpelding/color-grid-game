const {  checkRGBValidity, convertRGBToHex, convertHexToRGB, componentToHex } = require('./index');

describe('checkRGBValidity function', () => {
  test('returns true for a number between 0 and 255', () => {
    expect(checkRGBValidity(200)).toBeTruthy();
  });

  test('returns true for exactly 0', () => {
    expect(checkRGBValidity(0)).toBeTruthy();
  });

  test('returns true for exactly 255', () => {
    expect(checkRGBValidity(255)).toBeTruthy();
  });

  test('returns false for a number less than 0', () => {
    expect(checkRGBValidity(-2)).toBeFalsy();
  });

  test('returns false for a number greater than 255', () => {
    expect(checkRGBValidity(260)).toBeFalsy();
  });
});

describe('convertRGBToHex function', () => {
  test('turns valid rgb values into a hex color', () => {
    const uppercaseConvertedColor = convertRGBToHex(255, 170, 0).toUpperCase();
    expect(uppercaseConvertedColor).toBe('#FFAA00');
  });
});

describe('convertHexToRGB function', () => {
  test('turns a valid hex color into rgb values', () => {
    const rgbObj = {
      r: 255,
      g: 170,
      b: 0,
    };
    expect(convertHexToRGB('#ffaa00')).toStrictEqual(rgbObj);
  });

  test('throws an error for invalid hex color input', () => {
    const invalidHex = '#ffaazz';
    expect(() => {
      convertHexToRGB(invalidHex);
    }).toThrow();
  });
});

describe('componentToHex function', () => {
  test('turns a single r, g, or b value into a two-character string that will be part of a hex color', () => {
    expect(componentToHex(255)).toBe('ff');
  });

  test('throws an error if the input is not a number', () => {
    expect(() => {
      componentToHex('foo');
    }).toThrow();
  });

  test('throws an error if the input is not a valid integer between 0 and 255', () => {
    expect(() => {
      componentToHex(-2);
    }).toThrow();

    expect(() => {
      componentToHex(12.5);
    }).toThrow();

    expect(() => {
      componentToHex(1000);
    }).toThrow();
  });
});
