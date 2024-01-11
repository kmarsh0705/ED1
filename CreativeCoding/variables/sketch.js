function setup() {// runs once
	createCanvas(720, 720);
	background('blue');
	strokeWeight(8);
	
	fill ('pink');
}

function draw() {//runs in a loop

var num = 20

var sideLen = windowWidth/num;

	for (var y = 0; y < windowWidth; y = y + sideLen) {
	
		for (var x = 0; x < windowWidth; x = x + sideLen) {
		
	quad (x,y,
		x + sideLen,y,
		x + sideLen, y + sideLen,
		x,y +sideLen);

		
		
}
	
	
}

noLoop():
}