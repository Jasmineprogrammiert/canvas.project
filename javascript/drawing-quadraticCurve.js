class DrawingQuadraticCurve extends PaintFunction {
  constructor(contextReal, contextDraft) {
    super();
    this.contextReal = contextReal;
    this.contextDraft = contextDraft;
    this.click = 0;
  }

  onMouseDown(coord, event) {
    this.contextDraft.strokeStyle = "#CD5C5C"; 
    this.contextDraft.lineJoin = "round";  
    this.contextDraft.lineWidth = 3;
    this.contextReal.strokeStyle = "#CD5C5C"; 
    this.contextReal.lineJoin = "round";  
    this.contextReal.lineWidth = 3;
  }

  onDragging(coord, event) {}

  onMouseMove(coord, event) {
    if(this.click === 1) {
      var cpx = coord[0]; // Control Point(cpx, cpy)
      var cpy = coord[1];
      this.clearCanvas();
      this.contextDraft.beginPath();
      this.contextDraft.moveTo(this.x0, this.y0); // Start Point(x0, y0)
      // Control Point(cpx, cpy), End Point(x1, y1)
      this.contextDraft.quadraticCurveTo(cpx, cpy, cpx, cpy); 
      this.contextDraft.stroke();
    } else if(this.click === 2) {
      var cpx = coord[0];
      var cpy = coord[1];
      this.clearCanvas();
      this.contextDraft.beginPath();
      this.contextDraft.moveTo(this.x0, this.y0);
      this.contextDraft.quadraticCurveTo(cpx, cpy, this.x1, this.y1);
      this.contextDraft.stroke();
    }
  }

  onMouseUp(coord, event) {
    if(this.click === 0) {
      this.x0 = coord[0];
      this.y0 = coord[1];
      this.clearCanvas();
      this.click++;
    } else if(this.click === 1) {
      var cpx = coord[0];
      var cpy = coord[1];
      this.x1 = coord[0];
      this.y1 = coord[1];
      this.clearCanvas();
      this.contextDraft.beginPath();
      this.contextDraft.moveTo(this.x0, this.y0);
      this.contextDraft.quadraticCurveTo(cpx, cpy, this.x1, this.y1);
      this.contextDraft.stroke();
      this.click++;
    } else if (this.click === 2) {
      var cpx = coord[0];
      var cpy = coord[1];
      this.contextReal.beginPath();
      this.contextReal.moveTo(this.x0, this.y0);
      this.contextReal.quadraticCurveTo(cpx, cpy, this.x1, this.y1);
      this.contextReal.stroke();
      this.click = 0;
    }
  }

  onMouseLeave() {}
  onMouseEnter() {}

  clearCanvas = () => {
    this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
  }
}
