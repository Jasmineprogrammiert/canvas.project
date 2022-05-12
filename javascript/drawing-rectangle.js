class DrawingRectangle extends PaintFunction {
  constructor(contextReal, contextDraft) {
    super();
    this.contextReal = contextReal;
    this.contextDraft = contextDraft;
  }

  onMouseDown(coord, event) {
    this.contextReal.fillStyle = "#CD5C5C";
    this.origX = coord[0];
    this.origY = coord[1];
  }

  onDragging(coord, event) {
    this.contextDraft.fillStyle = "#CD5C5C";
    // Clear the drawing from (0, 0) to (canvasDraft.width, canvasDraft.height) when the mouse is dragging around
    this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height); 
    // Original coordinate (this.origX, this.origY)
    // New coordinate (coord[0] - this.origX, coord[1] - this.origY)
    this.contextDraft.fillRect(this.origX, this.origY, coord[0] - this.origX, coord[1] - this.origY);
  }

  onMouseMove() {}

  // Committing the element to canvasReal
  onMouseUp(coord) {
    // Clearing the rectangle first
    this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height
    );
    // Commit that drawing to context real. Otherwise it won't actually draw
    this.contextReal.fillRect(this.origX, this.origY, coord[0] - this.origX, coord[1] - this.origY);
  }
  onMouseLeave() {}
  onMouseEnter() {}
}
