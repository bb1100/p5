//move the mouse to move the ellipse and see its color change depending on where it is on the canvas

let color = {
  r:0,
  g:0,
  b:0
}

function setup() {
  createCanvas(800, 800);
  background(100, 50, 100);
  noStroke();
}

function draw() {
  //bg
  color.b = map(mouseX, 0, 800, 0, 255);
  color.g = map(mouseY, 0, 800, 255, 0);

  //ellipse
  fill(color.r, color.g, color.b, 70);
  ellipse(mouseX, mouseY, 30, 30);
  noStroke();
}
 
