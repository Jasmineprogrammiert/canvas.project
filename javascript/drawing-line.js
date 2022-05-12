// This class extends the PaintFunction class, which can be found in canvas-common.js
// Remember, order matters
// https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/clearRect
class DrawingLine extends PaintFunction {
  // This class extends the PaintFunction class, one instance is passing here
  constructor(contextReal) {
    super(); // super(): to access & call functions on an object's parent
    this.contextReal = contextReal;
  }

  // On mouse down, ensure that the pen has these features
  onMouseDown(coord, event) {
    this.contextReal.strokeStyle = "#CD5C5C"; // Fill in the color
    this.contextReal.lineJoin = "round";  // Kind of line
    this.contextReal.lineWidth = 3; // Width of line
    this.contextReal.beginPath(); // Begin the path drawing state
    this.contextReal.moveTo(coord[0], coord[1]); // Move the starting poiny to a specific state. coord[0] = mouseX. (x, y) is called a coordinate
  }
  onDragging(coord, event) { // Click & move the mouse
    this.draw(coord[0], coord[1]);
  }

  onMouseMove() {}
  onMouseUp() {}
  onMouseLeave() {}
  onMouseEnter() {}

  draw(x, y) {
    this.contextReal.lineTo(x, y);
    this.contextReal.stroke(); // The actual step of drawing the line
  }
}
