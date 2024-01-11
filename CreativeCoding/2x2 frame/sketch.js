function setup() {// runs once
	createCanvas(720, 720);
	background('blue');
	strokeWeight(8);
	
	fill ('pink');
}

function draw() {//runs in a loop

	translate(60,60); //this creates a new origin point
	quad(
	0,0,
	300,0,
	300,300,
	0,300
	);
	
	quad(
	300,0,
	600,0,
	600,300,
	300,300
	); //move 300px x directiomn
	
	quad(
	0,300,
	300,300,
	300,600,
	0,600
	);

	quad(
	300,300,
	600,300,
	600,600,
	300,600
	);


}