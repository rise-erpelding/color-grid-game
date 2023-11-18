const {
  checkRGBValidity,
  convertRGBToHex,
  convertHexToRGB,
  componentToHex,
  convertRGBToHSL,
  convertHSLToRGB,
  calculateMidpointHue,
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

describe('rgb-hsl conversion functions', () => {
  describe('rgb-hsl conversion validity', () => {
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
  });

  describe('rgb-hsl conversion functions', () => {
    test('convertRGBToHSL function', () => {
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

    test('convertHSLToRGB function', () => {
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
  });
});

describe('calculateMidpointHue function', () => {
  describe('values are valid', () => {
    test('throws an error if inputs are not valid hues', () => {
      expect(() => {
        calculateMidpointHue(-5, 255);
      }).toThrow('hues must not be less than 0 or greater than 359');
      expect(() => {
        calculateMidpointHue(0, 360);
      }).toThrow('hues must not be less than 0 or greater than 359');
      expect(() => {
        calculateMidpointHue(0, 255.4);
      }).toThrow('hues must be integer numbers');
    });
  });
  describe('calculateMidpointHue calculates the right hue', () => {
    test('red + yellow = orange', () => {
      expect(calculateMidpointHue(0, 60)).toBe(30); // red close to 0
      expect(calculateMidpointHue(60, 0)).toBe(30); // reverse #s
      expect(calculateMidpointHue(350, 60)).toBe(25); // red close to 360
    });
    test('red + blue = purple', () => {
      expect(calculateMidpointHue(0, 240)).toBe(300); // red close to 0
      expect(calculateMidpointHue(240, 354)).toBe(297); // red close to 360
      expect(calculateMidpointHue(350, 237)).toBe(294); // even + odd = non-integer mean
      expect(calculateMidpointHue(0, 180)).toBe(270);
    });
    test('yellow + blue = green', () => {
      expect(calculateMidpointHue(60, 240)).toBe(150); // red close to 0
      expect(calculateMidpointHue(243, 53)).toBe(148); // two odd #s
      expect(calculateMidpointHue(258, 64)).toBe(161);
      expect(calculateMidpointHue(247, 61)).toBe(154);
    });
    test('orange + purple = reddish', () => {
      expect(calculateMidpointHue(40, 290)).toBe(345);
      expect(calculateMidpointHue(292, 35)).toBe(344);
      expect(calculateMidpointHue(30, 300)).toBe(345);
    });
    test('orange + green = yellowish', () => {
      expect(calculateMidpointHue(32, 120)).toBe(76);
      expect(calculateMidpointHue(135, 27)).toBe(81);
      expect(calculateMidpointHue(30, 90)).toBe(60);
    });
    test('purple + green = bluish, or maybe orangish, could go either way', () => {
      expect(calculateMidpointHue(110, 300)).toBe(25);
      expect(calculateMidpointHue(280, 115)).toBe(198);
    });
  });
});
