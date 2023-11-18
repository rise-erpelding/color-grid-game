import { removeChildren } from '../helpers/dom-helpers';
import { convertHexToRGB, convertRGBToHSL } from '../color-utils';

function fillColors(grid) {
  const container = document.querySelector('.cmp-color-grid');
  removeChildren(container);
  grid.forEach((row, rowIndex) => {
    const colorRow = document.createElement('div');
    colorRow.classList.add('cmp-color-grid__row');
    container.appendChild(colorRow);
    row.forEach((color, tileIndex) => {
      const rgbColor = convertHexToRGB(color);
      const formattedRGB = `rgb(${rgbColor.r}, ${rgbColor.g}, ${rgbColor.b})`;
      const hslColor = convertRGBToHSL(rgbColor.r, rgbColor.g, rgbColor.b);
      const formattedHSL = `hsl(${hslColor.h}, ${hslColor.s}, ${hslColor.l})`;
      const colorTile = document.createElement('div');
      const tileNumber = rowIndex * grid.length + tileIndex;
      colorRow.appendChild(colorTile);
      colorTile.style.backgroundColor = color;
      colorTile.classList.add('cmp-color-grid__tile');
      colorTile.dataset.tileNumber = tileNumber;
      colorTile.title = `${color}\n${formattedRGB}\n${formattedHSL}`;
    });
  });
}

// eslint-disable-next-line import/prefer-default-export
export { fillColors };
