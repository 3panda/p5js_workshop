
//Array
var x = [];
var y = [];

//x
x[0] = 50;
x[1] = 150;
x[2] = 250;
x[3] = 350;
x[4] = 450;

//y
y[0] = 50;
y[1] = 125;
y[2] = 200;
y[3] = 275;
y[4] = 350;

//x = [50, 150....];
//y = [50, 125....];


function setup() {
	//Canvas Size
	createCanvas(500, 400);
	//background color
	background(200);

	//set colors
	fill(204, 101, 192);
	stroke(127, 63, 120);

	//Shapes
	ellipse(x[0], y[0], 100, 100);
	ellipse(x[1], y[1], 100, 100);
	ellipse(x[2], y[2], 100, 100);
	ellipse(x[3], y[3], 100, 100);
	ellipse(x[4], y[4], 100, 100);
}


function draw() {
	
}
