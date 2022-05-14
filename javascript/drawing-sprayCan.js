class DrawingSprayCan extends PaintFunction {
  constructor(contextReal) {
    super(); 
    this.contextReal = contextReal;
  }

  onMouseDown(coord, event) {
    this.contextReal.strokeStyle = "#CD5C5C";
    this.contextReal.lineJoin = "round"; 
    this.contextReal.lineWidth = 5; 
    this.contextReal.beginPath();
    this.contextReal.moveTo(coord[0], coord[1]); 
    this.draw(coord[0], coord[1]);
  }
  
  onDragging(coord, event) {
    // Create a radial gradient
    // (innerCircleX, innerCircleY, innerCircleRadius, 
    // outerCircleX, outerCircleY, outerCircleRadius)
    var gradient = this.contextReal.createRadialGradient(coord[0], coord[1], 15, coord[0], coord[1], 20);
    // addColorStop(offset, color)
    gradient.addColorStop(0, '#cc8181');
    // gradient.addColorStop(.6, '#cc6e6e');
    gradient.addColorStop(1, 'white');
    // Set the fill style and draw a rectangle
    this.contextReal.fillStyle = gradient;
    // fillRect(x, y, width, height)
    this.contextReal.fillRect(coord[0] - 20, coord[1] - 20, 50, 50);
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

