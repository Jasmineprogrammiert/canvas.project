class DrawingRectangle extends PaintFunction {
  constructor(contextReal, contextDraft) {
    super();
    this.contextReal = contextReal;
    this.contextDraft = contextDraft;
  }

  onMouseDown(coord, event) {
    // this.contextReal.fillStyle = "#CD5C5C";
    this.cpx = coord[0];
    this.cpy = coord[1];
  }

  onDragging(coord, event) {
    this.contextDraft.strokeStyle = "#CD5C5C";
    this.contextDraft.lineJoin = "round"; 
    this.contextDraft.lineWidth = 3; 
    this.clearCanvas();
    this.contextDraft.beginPath();
    this.contextDraft.rect(this.cpx, this.cpy, coord[0] - this.cpx, coord[1] - this.cpy);
    this.contextDraft.stroke();
  }

  onMouseMove() {}

  // Committing the element to canvasReal
  onMouseUp(coord) {
    this.contextReal.strokeStyle = "#CD5C5C";
    this.contextReal.lineJoin = "round"; 
    this.contextReal.lineWidth = 3; 
    this.contextReal.beginPath();
    this.contextReal.rect(this.cpx, this.cpy, coord[0] - this.cpx, coord[1] - this.cpy);
    this.contextReal.stroke();
  }

  onMouseLeave() {}
  onMouseEnter() {}

  clearCanvas = () => {
    this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
  }
}