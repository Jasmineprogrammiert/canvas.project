class DrawingBrush extends PaintFunction {
  constructor(contextReal, contextDraft) {
    super();
    this.contextReal = contextReal;
    this.contextDraft = contextDraft;
  }

  // On mouse down, ensure that the pen has these features
  onMouseDown(coord, event) {
    this.contextReal.strokeStyle = "#CD5C5C";
    this.contextReal.lineJoin = "round"; 
    this.contextReal.lineWidth = 25; 
    this.contextReal.beginPath(); // Start a new path
    // Define the starting point of the line 
    // coord[0] = mouseX (definded in canvas-common.js)
    this.contextReal.moveTo(coord[0], coord[1]); 
  }
  
  onDragging(coord, event) {
    this.draw(coord[0], coord[1]);
  }

  onMouseMove() {}
  onMouseUp() {}
  onMouseLeave() {}
  onMouseEnter() {}

  draw(x, y) {
    // Define the ending point of the line
    this.contextReal.lineTo(x, y);
    this.contextReal.stroke(); 
  }
}
