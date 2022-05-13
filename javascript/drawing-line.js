// class MyEventTarget extends EventTarget {
//   constructor(mySecret) {
//     super();
//     this._secret = mySecret;
//   }
class DrawingLine extends PaintFunction {
  constructor(contextReal) {
    super(); 
    this.contextReal = contextReal;
  }

  // On mouse down, ensure that the pen has these features
  onMouseDown(coord, event) {
    this.contextReal.strokeStyle = "#CD5C5C";
    this.contextReal.lineJoin = "round"; 
    this.contextReal.lineWidth = 3; 
    this.contextReal.beginPath(); // Start a new path
    // Move the pen to coordinate (coord[0], coord[1])
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
    this.contextReal.lineTo(x, y);
    this.contextReal.stroke(); 
  }
}
