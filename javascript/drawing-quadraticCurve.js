class DrawingQuadraticCurve extends PaintFunction {
  constructor(contextReal, contextDraft) {
    super();
    this.contextReal = contextReal;
    this.contextDraft = contextDraft;
    this.click = 0;
  }

  // On mouse down, ensure that the pen has these features
  onMouseDown(coord, event) {
    this.contextDraft.strokeStyle = "#CD5C5C"; 
    this.contextDraft.lineJoin = "round";  
    this.contextDraft.lineWidth = 3;
    // How come
    if(this.click === 0) {
      this.origX = coord[0];
      this.origY = coord[1];
    }
  }

  onDragging(coord, event) {
    // How come what if statement is needed here ?
    if(this.click === 0) {
      this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
      this.contextDraft.beginPath();
      this.contextDraft.moveTo(this.origX, this.origX);
      this.secX = coord[0];
      this.secY = coord[1];
      this.contextDraft.lineTo(this.endX, this.endY)
      this.contextDraft.stroke();
    }
    else if(this.click === 1) {
      this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
      this.contextDraft.beginPath();
      this.contextDraft.moveTo(this.origX, this.origY);
      // How come ?
      // coord[0]: The x-axis coordinate of the control point
      // this.endX: The x-axis coordinate of the end point
      this.contextDraft.quadraticCurveTo(coord[0], coord[1], this.endX, this.endY); 
      this.contextDraft.stroke();
    }
  }

  onMouseMove() {}

  onMouseUp(coord, event) {
    this.contextReal.strokeStyle = "#CD5C5C"; 
    this.contextReal.lineJoin = "round";  
    this.contextReal.lineWidth = 3;
    // Why what if statement is needed here?
    if(this.click === 0) {
      this.count++;
      console.log(this.count);
    }
    else if(this.click === 1) {
      this.contextReal.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
      this.contextReal.beginPath();
      this.contextReal.moveTo(this.origX, this.origY);
      this.contextReal.quadraticCurveTo(coord[0], coord[1], this.endX, this.endY);
      this.contextReal.stroke();
    }
  }

  onMouseLeave() {}
  onMouseEnter() {}
}
