function setup() {
  createCanvas(720, 720);
    background('blue');
  strokeWeight(8);
  fill ('red');
}

function draw() {
  
  translate (60,60); //creates a new origin point
quad (
  0,0,
  300,0,
  300,300,
  0,300
);
  
quad (
  300,0,
  600,0,
  600,300,
  300,300
);//move 300 px x direction
  
quad (
  0,300,
  300,300,
  300,600,
  0,600
);//move 300 px down
  
quad (
  300,300,
  600,300,
  600,600,
  300,600
);
}