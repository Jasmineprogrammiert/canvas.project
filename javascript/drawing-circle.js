class DrawingCircle extends PaintFunction {
  constructor(contextReal, contextDraft) {
    super();
    this.contextReal = contextReal;
    this.contextDraft = contextDraft;
  }

  onMouseDown(coord, event) {
    // this.contextReal.fillStyle = "#CD5C5C";
    this.contextDraft.strokeStyle = "#CD5C5C";
    this.contextDraft.lineJoin = "round"; 
    this.contextDraft.lineWidth = 3; 
    this.x = coord[0];
    this.y = coord[1];
  }

  onDragging(coord, event) {
    this.clearCanvas();
    this.contextDraft.beginPath();
    this.radius = Math.pow((Math.pow((coord[0] - this.x), 2),(Math.pow((coord[1] - this.y), 2))), 1 / 2);
    // context.arc(x, y, r, sAngle, eAngle) <= clockwise
    // context.arc(x, y, r, sAngle, eAngle, counterclockwise)
    this.contextDraft.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    this.contextDraft.stroke();
  }

  onMouseMove() {}

  // Committing the element to canvasReal
  onMouseUp(coord) {
    this.contextReal.strokeStyle = "#CD5C5C";
    this.contextReal.lineJoin = "round"; 
    this.contextReal.lineWidth = 3; 
    this.contextReal.beginPath();
    this.radius = Math.pow((Math.pow((coord[0] - this.x), 2),(Math.pow((coord[1] - this.y), 2))), 1 / 2);
    this.contextReal.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    this.contextReal.stroke();
  }

  onMouseLeave() {}
  onMouseEnter() {}

  clearCanvas = () => {
    this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
  }
}