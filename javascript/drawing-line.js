// This class extends the PaintFunction class, which can be found in canvas-common.js
// Remember, order matters
// https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/clearRect
class DrawingLine extends PaintFunction {
  // This class extends the PaintFunction class
  // One instance is passing here
  constructor(contextReal) {
    super(); // super(): to access & call functions on an object's parent
    this.context = contextReal;
  }

  // On mouse down, ensure that the pen has these features
  onMouseDown(coord, event) {
    this.context.strokeStyle = "#df4b26"; // Fill in the color
    this.context.lineJoin = "round";  // Kind of line
    this.context.lineWidth = 3; // Width of line
    this.context.beginPath(); // Begin the path drawing state
    this.context.moveTo(coord[0], coord[1]); // Move the starting poiny to a specific state
  }
  onDragging(coord, event) { // Click & move the mouse
    this.draw(coord[0], coord[1]);
  }

  onMouseMove() {}
  onMouseUp() {}
  onMouseLeave() {}
  onMouseEnter() {}

  draw(x, y) {
    this.context.lineTo(x, y);
    this.context.stroke(); // The actual step of drawing the line
  }
}
