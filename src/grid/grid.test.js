const { makeGrid } = require('./grid');

describe('makeGrid function', () => {
  test('makes a grid of colors', () => {
    const createdGrid = makeGrid(4, '#00ffff', '#7fff00', '#008b8b', '#006400');
    const expectedGrid = [
      ['#00ffff', '#2affaa', '#55ff55', '#7fff00'],
      ['#00d8d8', '#1cd490', '#39d048', '#55cb00'],
      ['#00b2b2', '#0ea977', '#1ca03b', '#2a9800'],
      ['#008b8b', '#007e5d', '#00712e', '#006400'],
    ];
    expect(createdGrid).toStrictEqual(expectedGrid);
  });
});
