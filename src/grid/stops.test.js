const { makeStops } = require('./stops');

describe('makeStops tests', () => {
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

  test('makes an array where first index is equal to startVal argument', () => {
    createdStops = makeStops(5, 100, 112);
    expectedStops = [100, 103, 106, 109, 112];
    expect(createdStops[0]).toBe(expectedStops[0]);
  });

  test('makes an array where last index is equal to endVal argument', () => {
    createdStops = makeStops(5, 100, 112);
    expectedStops = [100, 103, 106, 109, 112];
    expect(createdStops[createdStops.length - 1]).toBe(expectedStops[expectedStops.length - 1]);
  });

  test('makes an evenly spaced array if (endVal - startVal)/(size - 1) is a whole number', () => {
    createdStops = makeStops(5, 100, 112);
    expectedStops = [100, 103, 106, 109, 112];
    // expect()
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
