const { makeRow } = require('./row');

describe('makeRow function', () => {
  test('makes a row of rgb colors', () => {
    const createdRow = makeRow(5, '#ff336e', '#009033', false);
    const expectedRow = ['#ff336e', '#bf4a5f', '#806251', '#407942', '#009033'];
    expect(createdRow).toStrictEqual(expectedRow);
  });
  test.skip('makes a row of hsl colors', () => {
    const createdRow = makeRow(4, '#996699', '#cccccc', true);
    const expectedRow = ['#996699', '#8c9da6', '#b1b8ad', '#cccccc'];
    expect(createdRow).toStrictEqual(expectedRow);
  });
});
