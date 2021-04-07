const { makeRow } = require('./row');

describe('makeRow function', () => {
  test('makes a row of colors', () => {
    const createdRow = makeRow(5, '#ff336e', '#009033');
    const expectedRow = ['#ff336e', '#bf4a5f', '#806251', '#407942', '#009033'];
    expect(createdRow).toStrictEqual(expectedRow);
  });
});
