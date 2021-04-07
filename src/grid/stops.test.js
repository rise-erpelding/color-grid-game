const { makeStops } = require('./stops');

describe('makeStops function', () => {
  let createdStops;
  let expectedStops;
  let startVal = 100;
  let endVal = 112;
  let size = 5;

  test('makes an array of stops given a size and a valid start and end value', () => {
    createdStops = makeStops(size, startVal, endVal);
    expectedStops = [100, 103, 106, 109, 112];
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
    expect([createdStops[0]+ 5, createdStops[0] + 6]).toContainEqual(expectedStops[1]);
    expect([createdStops[1]+ 5, createdStops[1] + 6]).toContainEqual(expectedStops[2]);
    expect([createdStops[2]+ 5, createdStops[2] + 6]).toContainEqual(expectedStops[3]);
  });

  test('throws an error if the input is not a valid integer', () => {
    const tooSmallNumber = -5;
    const tooLargeNumber = 260;
    const notIntegerNumber = 4.5;
    const validNumber = 100;
    const size = 5;
    expect(() => {
      makeStops(size, tooSmallNumber, validNumber);
    }).toThrow();
    expect(() => {
      makeStops(size, validNumber, tooLargeNumber);
    }).toThrow();
    expect(() => {
      makeStops(size, notIntegerNumber, validNumber);
    }).toThrow();
  });
});
