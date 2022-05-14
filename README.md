### Tip:
Try removing lines of code to see how it works together. Go slow, and read the documentation. Also, looking at different examples online might be helpful!

### Examples:
- the-canvas-boys.surge.sh
- http://nostalgic-paint.surge.sh/
- https://brockwei.github.io/canvas/
- http://canvasg2march.surge.sh/

### Useful Links
https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Basic_usage

### Functionality
1. Scribblbe (drawing-line.js) (DONE)
2. Brush (thicker version of scribble) (DONE)
3. Spray-can (DONE)
4. Quadratic Curve (DONE)
5. Circle (DONE)
6. Rectangle (DONE)
7. Bezier Curve
8. Polygon
9. Random Shapes

10. Fill-in
11. Font
12. Emoji
13. Eraser
14. Undo
15. Redo
16. Clear
17. Upload
18. Download

### Confusion (functions are completed, don't understand the codes)
- Circle (drawing-circle.js)
  1. Don't get the logic of defining dynamic radius: 
    this.radius = Math.pow((Math.pow((coord[0] - this.x), 2),(Math.pow((coord[1] - this.y), 2))), 1 / 2);

- Quadratic Curve (drawing-quadraticCurve.js)
  1. Why some ordinates (x, y) are declared as variables, while some others are declared via this. method?
  2. Have problem understanding the if(this.click === 0) under onMouseUp. How come the codes this.click === 0 are written as such?
      My guesses:
      this.click === 1 refers to Start Point
      this.click === 2 refers to End Point
      this.click === 0 refers to Control Point
  3. Why under onMouseUp, this.click = 0 is called at the end of else if (this.click === 2) {}
    this.click = 0 is also defined under the constructor() on top of the JS sheet. this.click on top and in onMouseUp must be connected. Their relationship is however unclear to me. 

### Problems (functions completed with drawbacks)
- Spray Can (drawing-sprayCan.js)
  1. Wanted effect (don't understand the codes below & failed to implement them)
  https://codepen.io/gpetrioli/pen/ramqBz
  

