const {
  checkRGBValidity,
  convertRGBToHex,
  convertHexToRGB,
  componentToHex,
  convertRGBToHSL,
  convertHSLToRGB,
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

describe('convertRGBToHSL function', () => {
  test('throws an error if r, g, or b is not between 0 and 255', () => {
    expect(() => {
      convertRGBToHSL(-2, 0, 123);
    }).toThrow('rgb values must be between 0 and 255');
    expect(() => {
      convertRGBToHSL(34, 1424, 123);
    }).toThrow('rgb values must be between 0 and 255');
    expect(() => {
      convertRGBToHSL(34, 0, 359);
    }).toThrow('rgb values must be between 0 and 255');
  });

  test('converts rgb to hsl', () => {
    // convert yellow rgb(255, 255, 0) to hsl(60, 100%, 50%)
    expect(convertRGBToHSL(255, 255, 0)).toEqual({
      h: 60,
      s: 100,
      l: 50,
    });
    // convert pale blue rgb(110, 110, 247) to hsl(240, 90%, 70%)
    expect(convertRGBToHSL(110, 110, 247)).toEqual({
      h: 240,
      s: 90,
      l: 70,
    });
    // convert purple rgb(143, 0, 153) to hsl(296, 100%, 30%)
    expect(convertRGBToHSL(143, 0, 153)).toEqual({
      h: 296,
      s: 100,
      l: 30,
    });
    // convert black rgb(0, 0, 0) to hsl(0, 0%, 0%)
    expect(convertRGBToHSL(0, 0, 0)).toEqual({
      h: 0,
      s: 0,
      l: 0,
    });
    // convert gray rgb(130, 130, 130) to hsl(0, 0%, 51%)
    expect(convertRGBToHSL(130, 130, 130)).toEqual({
      h: 0,
      s: 0,
      l: 51,
    });
  });
});

describe('convertHSLToRGB function', () => {
  // convert yellow hsl(60, 100%, 50%) to rgb(255, 255, 0)
  expect(convertHSLToRGB(60, 100, 50)).toEqual({
    r: 255,
    g: 255,
    b: 0,
  });
  // convert pale blue hsl(240, 90%, 70%) to rgb(110, 110, 247)
  expect(convertHSLToRGB(240, 90, 70)).toEqual({
    r: 110,
    g: 110,
    b: 247,
  });
  // convert purple hsl(296, 100%, 30%) to rgb(143, 0, 153)
  expect(convertHSLToRGB(296, 100, 30)).toEqual({
    r: 143,
    g: 0,
    b: 153,
  });
  // convert black hsl(0, 0%, 0%) to rgb(0, 0, 0)
  expect(convertHSLToRGB(0, 0, 0)).toEqual({
    r: 0,
    g: 0,
    b: 0,
  });
  // convert gray hsl(0, 0%, 51%) to rgb(130, 130, 130)
  expect(convertHSLToRGB(0, 0, 51)).toEqual({
    r: 130,
    g: 130,
    b: 130,
  });
});
