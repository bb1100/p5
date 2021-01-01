let x, y, amt, startColor, newColor;

function setup() {
  createCanvas(800, 800);
  //line(12, 25, 70, 90);
  background(0);
  x = 0;
  y = 0;
  
  startColor = color('rgb(0,255,0)');
  newColor = color((random(255),random(255),random(255)));
  amt = 0;
  stroke(startColor);
}

 function draw() {
   fill(0);


   //noFill();
   curve (0, 0, x, y, mouseX, mouseY, width, height);
   //x = x + 0.5;
   stroke(lerpColor(startColor, newColor, amt));
   amt += 0.01;
   
   if(amt >= 1){
    amt = 0.0;
    startColor = newColor;
    newColor = color(random(255),random(255),random(255));
  }
   
   x = random(-50, 50);
   y = random(-50, 50);
 }

function mousePressed() {
  clear();
  background(0);
}
