function setup() {
  createCanvas(720, 720);
    background('blue');
  strokeWeight(8);
  fill ('red');
}

function draw() {
  
  translate (60,60); //creates a new origin point
  
  for(var y = 0; y < 600; y = y + 300 ){ // loop to create grid in y direction
  
  for(var x = 0; x < 600; x = x + 300 ){ // loop to create row of squares in x direction
      quad (
    x,y,
    x + 300,y,
    x + 300,y + 300,
    x,y + 300
  );
  }
  }


}