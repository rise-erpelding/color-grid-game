const {
  checkRGBValidity,
  convertRGBToHex,
  convertHexToRGB,
  componentToHex,
} = require('./index');

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

  test('throws an error if an empty string is passed in', () => {
    expect(() => {
      checkRGBValidity('');
    }).toThrow('num must be a number');
  });
});

describe('convertRGBToHex function', () => {
  test('turns valid rgb values into a hex color', () => {
    const uppercaseConvertedColor = convertRGBToHex(255, 170, 0).toUpperCase();
    expect(uppercaseConvertedColor).toBe('#FFAA00');
  });
});

describe('convertHexToRGB function', () => {
  const rgbObj = {
    r: 255,
    g: 170,
    b: 0,
  };
  test('turns a valid lowercased hex color into rgb values', () => {
    expect(convertHexToRGB('#ffaa00')).toStrictEqual(rgbObj);
  });

  test('turns a valid uppercased hex color into rgb values', () => {
    expect(convertHexToRGB('#FFAA00')).toStrictEqual(rgbObj);
  });

  test('turns a valid hex color without the hex symbol into rgb values', () => {
    expect(convertHexToRGB('ffaa00')).toStrictEqual(rgbObj);
  });

  test('throws an error for hex input more than 6 characters', () => {
    const notAHex = 'ffaa00f';
    expect(() => {
      convertHexToRGB(notAHex);
    }).toThrow('not a valid hex');
  });

  test('throws an error for invalid hex color input', () => {
    const invalidHex = '#ffaazz';
    expect(() => {
      convertHexToRGB(invalidHex);
    }).toThrow('not a valid hex');
  });
});

describe('componentToHex function', () => {
  test('turns a single r, g, or b value into a two-character string that will be part of a hex color', () => {
    expect(componentToHex(255)).toBe('ff');
  });

  test('throws an error if the input is not a number', () => {
    expect(() => {
      componentToHex('foo');
    }).toThrow('rgbVal must be a number');
  });

  test('throws an error if the input is not a valid integer between 0 and 255', () => {
    expect(() => {
      componentToHex(-2);
    }).toThrow('rgbVal must be an integer between 0 and 255, inclusive');

    expect(() => {
      componentToHex(12.5);
    }).toThrow('rgbVal must be an integer between 0 and 255, inclusive');

    expect(() => {
      componentToHex(1000);
    }).toThrow('rgbVal must be an integer between 0 and 255, inclusive');
  });
});
