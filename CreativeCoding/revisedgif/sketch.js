let gif;

function preload (){
gif = loadImage('assets/MarshGif.gif');
}

function setup() {// runs once
	createCanvas (windowWidth, windowHeight);
	fill('blue');
	strokeWeight(1);
}

function draw() {//runs in a loop
	background (yellow);
	var num = 20
	var sideLen = windowWidth/num;
	
	for (var y = 0; y < windowHeight; y = y + sideLen) {
		
		for (var x = 0; x< windowWidth; x = x + sideLen){
		
		image (gif, x , y, sideLen, sideLen);
		}
	}
}

function windowResized(){
	resizeCanvas (windowWidth, windowHeight);
}