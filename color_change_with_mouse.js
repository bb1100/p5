//move mouse around canvas to change its color

let color = {
  r:0,
  g:0,
  b:0
}

function setup() {
  createCanvas(800, 800);
}

function draw() {
  //bg
  color.b = map(mouseX, 0, 800, 0, 255);
  color.g = map(mouseY, 0, 800, 255, 0);
  background(color.r, color.g, color.b);
  //ellipse
  fill(250, 115, 220);
}
