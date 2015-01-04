
//Array
var x = [50, 150, 250, 350, 450];
var y = [50, 125, 200, 275, 350];


function setup() {
	createCanvas(500, 400);
	background(200);
	fill(204, 101, 192);
	stroke(127, 63, 120);
	
	for (i = 0; i < 5; i++) {
		ellipse(x[i], y[i], 100, 100);
	}

}


function draw() {
	
}


