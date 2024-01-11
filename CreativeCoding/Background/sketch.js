
let gif;

function preload (){
gif = loadImage ('assets/shift.gif');

}

function setup() {// runs once
	createCanvas(720, 720);
	background('blue');
	strokeWeight(8);
	
	fill ('pink');
}

function draw() {//runs in a loop

background('255,255,255');

var num = 20

var sideLen = windowWidth;

var sideLen = windowWidth/num;

	for (var y = 0; y < windowWidth; y = y + sideLen) {
	
		for (var x = 0; x < windowWidth; x = x + sideLen) {
		
image (gif,x,y, sideLen, sideLen);
		
}
	
	
}

//noLoop():
}

function windowWidth (){
resizeCanvas (windowWidth, windowHeight);
}

