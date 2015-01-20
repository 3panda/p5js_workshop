//setup
var colorSet;
var colorChanged

function setup() {
	createCanvas(500, 400);
	background(51,54,49);
	fill(204, 101, 192);
	noStroke();

	colorSet = color(215, 0, 58);
	colorFlag	 = false;


}

//draw
function draw() {
	background(51,54,49);
	Ball(250, 200, 100, colorSet);
}


//mouseClicked
function mouseClicked() {

	if (colorChanged == false) {
		colorSet = color(218, 82, 56);
		colorChanged = true;

	} else {
		colorSet = color(215, 0, 58);
		colorChanged = false;

	}

}


//BAll
function Ball(_x, _y, _d, _color) {
	fill(_color);
	ellipse(_x, _y, _d, _d, _color);
}

