let gif;

function preload (){
gif = loadImage ('assets/shift.gif');

}

function setup() {// runs once
	createCanvas(windowWidth, windowHeight);
	background('black');	
	fill ('pink');
}

function draw() {//runs in a loop

background('gray');

var num = 6;

var sideLen = windowWidth/num;

	for (var y = 0; y < 2 * windowHeight; y = y + sideLen) {
	
		for (var x = 0; x < 2 * windowWidth; x = x + sideLen) {
		
image (gif,x,y, sideLen, sideLen);
		
}
	
	
}

}

function windowWidth (){
resizeCanvas (windowWidth, windowHeight);
}

