function setup() {
  createCanvas(720, 720);
    background('blue');
  strokeWeight(8);
}

function draw() {
  
  translate (60,60); //creates a new origin point
quad (
  0,0,
  300,0,
  300,300,
  0,300
);
}
