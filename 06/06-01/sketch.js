
//setup
function setup() {
	createCanvas(500, 400);
	background(51,54,49);
	fill(204, 101, 192);
	noStroke();
	//Ballの生成
	Ball(250, 200, 100, color(215, 0, 58));

}


//draw
function draw() {

}


//mouseClicked
function mouseClicked() {

}



//BAll
function Ball(_x, _y, _d, _color) {
	fill(_color);
	ellipse(_x, _y, _d, _d, _color);
}

