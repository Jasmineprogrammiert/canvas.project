class DrawingQuadraticCurve extends PaintFunction {
  constructor(contextReal, contextDraft) {
    super();
    this.contextReal = contextReal;
    this.contextDraft = contextDraft;
    this.click = 0;
  }

  onMouseDown(coord, event) {
    this.contextDraft.strokeStyle = "#CD5C5C"; 
    // this.contextDraft.lineJoin = "round";  
    this.contextDraft.lineWidth = 3;
    this.contextReal.strokeStyle = "#CD5C5C"; 
    // this.contextReal.lineJoin = "round";  
    this.contextReal.lineWidth = 3;
  }

  onDragging(coord, event) {}

  onMouseMove(coord, event) {
    if(this.click === 1) {
      // cpx: The x-axis coordinate of the control point
      var cpx = coord[0]; 
      var cpy = coord[1];
      this.contextDraft.beginPath();
      this.contextDraft.moveTo(this.origX, this.origY);
      // Function defined at the bottom
      this.clearCanvas();
      this.contextDraft.quadraticCurveTo(cpx, cpy, cpx, cpy);
      this.contextDraft.stroke();
    } else if(this.click === 2) {
      var cpx = coord[0];
      var cpy = coord[1];
      this.contextDraft.beginPath();
      this.contextDraft.moveTo(this.origX, this.origY);
      this.clearCanvas();
      this.contextDraft.quadraticCurveTo(cpx, cpy, this.endX, this.endY); 
      this.contextDraft.stroke();
    }
  }

  onMouseUp(coord, event) {
    if(this.click === 0) {
      this.origX = coord[0];
      this.origY = coord[1];
      this.clearCanvas;
      this.click++;
    } else if(this.click === 1) {
      var cpx = coord[0];
      var cpy = coord[1];
      this.endX = coord[0];
      this.endY = coord[1];
      this.contextDraft.beginPath();
      this.contextDraft.moveTo(this.origX, this.origY);
      this.clearCanvas;
      this.contextDraft.quadraticCurveTo(cpx, cpy, this.endX, this.endY);
      this.contextReal.stroke();
      this.click++;
    } else if(this.click === 2) { // why not else? 
      var cpx = coord[0];
      var cpy = coord[1];
      this.clearCanvas();
      this.contextReal.beginPath();
      this.contextReal.moveTo(this.origX, this.origY);
      this.contextReal.quadraticCurveTo(cpx, cpy, this.endX, this.endY);
      this.contextReal.stroke();
      saveState();
      this.click = 0;
    }
  }

  onMouseLeave() {}
  onMouseEnter() {}

  // reset() {
	// 	this.click = 0;
	// 	this.clearCanvas;
	// }

  draw(x, y) {
		this.contextReal.lineTo(x, y);
		this.contextReal.moveTo(x, y);
		this.contextReal.closePath();
		this.contextReal.stroke();
	}

  clearCanvas = () => {
    this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
  }
}
