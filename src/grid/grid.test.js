const { makeGrid } = require('./grid');

describe('makeGrid function', () => {
  test('makes a grid of colors', () => {
    const createdGrid = makeGrid(4, '#00ffff', '#7fff00', '#008b8b', '#006400');
    const expectedGrid = [
      [
        'color-mix(in #00ffff, #7fff00 100%, #008b8b 0%)',
        'color-mix(in #00ffff, #7fff00 67%, #008b8b 33%)',
        'color-mix(in #00ffff, #7fff00 33%, #008b8b 67%)',
        'color-mix(in #00ffff, #7fff00 0%, #008b8b 100%)',
      ],
      [
        'color-mix(in #00ffff, color-mix(in #00ffff, #7fff00 100%, #008b8b 0%) 67%, color-mix(in #00ffff, #006400 100%, undefined 0%) 33%)',
        'color-mix(in #00ffff, color-mix(in #00ffff, #7fff00 67%, #008b8b 33%) 67%, color-mix(in #00ffff, #006400 67%, undefined 33%) 33%)',
        'color-mix(in #00ffff, color-mix(in #00ffff, #7fff00 33%, #008b8b 67%) 67%, color-mix(in #00ffff, #006400 33%, undefined 67%) 33%)',
        'color-mix(in #00ffff, color-mix(in #00ffff, #7fff00 0%, #008b8b 100%) 67%, color-mix(in #00ffff, #006400 0%, undefined 100%) 33%)',
      ],
      [
        'color-mix(in #00ffff, color-mix(in #00ffff, #7fff00 100%, #008b8b 0%) 33%, color-mix(in #00ffff, #006400 100%, undefined 0%) 67%)',
        'color-mix(in #00ffff, color-mix(in #00ffff, #7fff00 67%, #008b8b 33%) 33%, color-mix(in #00ffff, #006400 67%, undefined 33%) 67%)',
        'color-mix(in #00ffff, color-mix(in #00ffff, #7fff00 33%, #008b8b 67%) 33%, color-mix(in #00ffff, #006400 33%, undefined 67%) 67%)',
        'color-mix(in #00ffff, color-mix(in #00ffff, #7fff00 0%, #008b8b 100%) 33%, color-mix(in #00ffff, #006400 0%, undefined 100%) 67%)',
      ],
      [
        'color-mix(in #00ffff, #006400 100%, undefined 0%)',
        'color-mix(in #00ffff, #006400 67%, undefined 33%)',
        'color-mix(in #00ffff, #006400 33%, undefined 67%)',
        'color-mix(in #00ffff, #006400 0%, undefined 100%)',
      ],
    ];
    expect(createdGrid).toStrictEqual(expectedGrid);
  });
});
