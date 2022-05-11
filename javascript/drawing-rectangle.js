// Drawing Rectangle Functionality

class DrawingRectangle extends PaintFunction {
  constructor(contextReal, contextDraft) {
    super();
    this.contextReal = contextReal;
    this.contextDraft = contextDraft;
  }

  onMouseDown(coord, event) {
    this.contextReal.fillStyle = "#f44"; // Manipulating the context draft
    this.origX = coord[0]; // coord[0] refers to mouseX in canvas-common.js
    this.origY = coord[1];
  }

  onDragging(coord, event) {
    this.contextDraft.fillStyle = "#f44";
    this.contextDraft.clearRect( // Disable drawing when pressing & moving around the mouse
      0,
      0,
      canvasDraft.width,
      canvasDraft.height
    );
    this.contextDraft.fillRect( // Pass in the original x and y coordinates, followed by the new coordinates get for position x and y
      this.origX,
      this.origY,
      coord[0] - this.origX, // mouseX (currentPosition) - this.origX (originPosition)
      coord[1] - this.origY
    );
  }

  onMouseMove() {}

  // Committing the element to the canvas
  onMouseUp(coord) {
    this.contextDraft.clearRect(  // Clearing the rectangle first
      0,
      0,
      canvasDraft.width,
      canvasDraft.height
    );
    this.contextReal.fillRect( // Commit that drawing to context real. Otherwise it won't actually draw
      this.origX,
      this.origY,
      coord[0] - this.origX,
      coord[1] - this.origY
    );
  }
  onMouseLeave() {}
  onMouseEnter() {}
}
