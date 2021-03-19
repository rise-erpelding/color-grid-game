# Color Grid Game (working title)

The color grid game allows users to generate a customizable grid consisting of differently-colored tiles. This is an exciting way to explore and enjoy colors. Users can take it a step further--they can then choose to make this grid into a puzzle game that randomizes the grid so that they can put it back together in the correct order.

[This codepen](https://codepen.io/riseerpelding/pen/qBqzwvq) contains most of the work I've done on this so far.


## Features
* Create a color grid by picking 4 corner colors and a grid size (small, medium, large)
* Play the puzzle game with your grid (or pick from presets) - put the grid back in order!

## Technologies used/Technologies I'm interested in
* [Some kind of color picker library](https://blog.logrocket.com/color-picker-libraries-to-use-in-2021/)
* Maybe Vue because I haven't used it before? Or React because I have and I want some pro tips? (I am also really curious about using React Native if that is on the table at all--although that might be out of scope for the apprenticeship?)
* Beyond that, open to whatever seems like it might lend itself well to this.
### What does the game do? (additional details for decomping)
* Allows you to generate a color grid (optionally) - a much more polished, embellished version of the CodePen
  * You generate this color grid by picking 4 corner colors
  * It would be really nice if there were a color picker that could be utilized to do this
  * Then you can pick from several preset sizes for the grid, for instance, a 4x4, 8x8, 16x16 (small, medium, large)
  * Then it creates a grid of tiles with the 4 picked colors in each corner and tiles in between that gradually change from one corner color to the other
* ORR the grids come pre-made and you pick the one you like and the size (I like this idea a lot less and would be happy to make it just a grid generating playground as an MVP before a game)
* The game then shows you the grid with the colors put in order, then scrambles the tiles in the grid. It is then up to the player to put them back together in the right order by switching each misplaced tile with the one that goes in its spot.
* The player will receive some kind of feedback so that they know when the tile is in the correct place, maybe a dot or some marker on the correctly (or incorrectly) placed tile.
