
let gif;

function preload (){
gif = loadImage ('assets/shift.gif');

}

function setup() {// runs once
	createCanvas(windowWidth, windowHeight);
	background('blue');	
	fill ('pink');
}

function draw() {//runs in a loop

background('blue');

var num = 20;

var sideLen = windowWidth/num;

	for (var y = 0; y < windowHeight; y = y + sideLen) {
	
		for (var x = 0; x < windowWidth; x = x + sideLen) {
		
image (gif,x,y, sideLen, sideLen);
		
}
	
	
}

}

function windowWidth (){
resizeCanvas (windowWidth, windowHeight);
}


