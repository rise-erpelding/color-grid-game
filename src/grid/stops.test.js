const { makeStops, makeHueStops, makeStopsWithGivenMidpoint } = require('./stops');

describe('makeStops function', () => {
  let createdStops;
  let expectedStops;
  let startVal;
  let endVal;
  let size;

  beforeEach(() => {
    startVal = 100;
    endVal = 112;
    size = 5; // array of size 5 used for almost all tests
  });

  test('makes an array of the specified length', () => {
    createdStops = makeStops(size, startVal, endVal);
    const expectedLength = size;
    expect(createdStops.length).toStrictEqual(expectedLength);
  });

  test('makes an array of stops given a size and a valid start and end value', () => {
    createdStops = makeStops(size, startVal, endVal);
    expectedStops = [100, 103, 106, 109, 112];
    expect(createdStops).toStrictEqual(expectedStops);
  });

  test('makes an array consisting only of startVal and endVal if size is 2', () => {
    size = 2;
    createdStops = makeStops(size, startVal, endVal);
    expectedStops = [100, 112];
    expect(createdStops).toStrictEqual(expectedStops);
  });

  test('makes an array of stops even if endVal is less than startVal', () => {
    createdStops = makeStops(size, endVal, startVal);
    expectedStops = [112, 109, 106, 103, 100];
    expect(createdStops).toStrictEqual(expectedStops);
  });

  test('makes an array whose first index is equal to startVal argument', () => {
    createdStops = makeStops(5, 100, 112);
    expectedStops = [100, 103, 106, 109, 112];
    expect(createdStops[0]).toBe(expectedStops[0]);
  });

  test('makes an array whose last index is equal to endVal argument', () => {
    createdStops = makeStops(5, 100, 112);
    expectedStops = [100, 103, 106, 109, 112];
    expect(createdStops[createdStops.length - 1]).toBe(expectedStops[expectedStops.length - 1]);
  });

  test('makes an array of equal numbers if startVal = endVal', () => {
    createdStops = makeStops(5, 100, 100);
    expectedStops = [100, 100, 100, 100, 100];
    expect(createdStops).toStrictEqual(expectedStops);
  });

  test('makes an array whose indices are exactly evenly spaced numbers if (endVal - startVal)/(size - 1) is a whole number', () => {
    createdStops = makeStops(5, 100, 112);
    expectedStops = [100, 103, 106, 109, 112];
    expect(createdStops[0] + 3).toBe(expectedStops[1]);
    expect(createdStops[1] + 3).toBe(expectedStops[2]);
    expect(createdStops[2] + 3).toBe(expectedStops[3]);
    expect(createdStops[3] + 3).toBe(expectedStops[4]);
  });

  test('makes an array whose indices are numbers spaced within 1 digit of each other if (endVal - startVal)/(size - 1) is NOT a whole number', () => {
    createdStops = makeStops(4, 100, 116);
    expectedStops = [100, 105, 111, 116];
    expect([createdStops[0] + 5, createdStops[0] + 6]).toContainEqual(expectedStops[1]);
    expect([createdStops[1] + 5, createdStops[1] + 6]).toContainEqual(expectedStops[2]);
    expect([createdStops[2] + 5, createdStops[2] + 6]).toContainEqual(expectedStops[3]);
  });

  test('throws an error if the size is an empty string', () => {
    size = '';
    expect(() => {
      makeStops(size, startVal, endVal);
    }).toThrow('size must be a number');
  });

  test('throws an error if the size is not a valid integer', () => {
    size = 3.5;
    expect(() => {
      makeStops(size, startVal, endVal);
    }).toThrow('size must be an integer');
  });

  test('throws an error if the size is less than 2', () => {
    expect(() => {
      makeStops(1, startVal, endVal);
    }).toThrow('size must be at least 2');
    expect(() => {
      makeStops(0, startVal, endVal);
    }).toThrow('size must be at least 2');
    expect(() => {
      makeStops(-2, startVal, endVal);
    }).toThrow('size must be at least 2');
  });
});

describe('makeHueStops function', () => {
  test('makes arrays with appropriate hues and sizes', () => {
    expect(makeHueStops(2, 0, 180)).toStrictEqual([0, 180]);
    expect(makeHueStops(2, 0, 180).length).toBe(2);
    expect(makeHueStops(3, 0, 180)).toStrictEqual([0, 270, 180]);
    expect(makeHueStops(3, 0, 180).length).toBe(3);
    expect(makeHueStops(4, 0, 180)).toStrictEqual([0, 135, 225, 180]);
    expect(makeHueStops(4, 0, 180).length).toBe(4);
    expect(makeHueStops(5, 0, 180)).toStrictEqual([0, 135, 270, 225, 180]);
    expect(makeHueStops(5, 0, 180).length).toBe(5);
    expect(makeHueStops(5, 258, 64)).toStrictEqual([258, 210, 161, 113, 64]);
    expect(makeHueStops(5, 258, 64).length).toBe(5);
    expect(makeHueStops(6, 305, 110)).toStrictEqual([305, 213, 120, 55, 83, 110]);
    expect(makeHueStops(6, 305, 110).length).toBe(6);
    expect(makeHueStops(10, 60, 350))
      .toStrictEqual([60, 53, 46, 39, 32, 90, 155, 220, 285, 350]);
    expect(makeHueStops(10, 60, 350).length).toBe(10);
  });
});

describe('makeStopsWithGivenMidpoint function', () => {
  test('makes stops with appropriate hues and sizes', () => {
    expect(makeStopsWithGivenMidpoint(5, 251, 243, 131)).toStrictEqual([251, 247, 243, 187, 131]);
    expect(makeStopsWithGivenMidpoint(8, 211, 231, 157)).toStrictEqual(
      [211, 216, 221, 226, 213, 194, 176, 157],
    );
  });
});
