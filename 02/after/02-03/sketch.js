
//Array
var x = [50, 150, 250, 350, 450];
var y = [50, 125, 200, 275, 350];


function setup() {
	//Canvas Size
	createCanvas(500, 400);
	//background color
	background(200);

	//set colors
	fill(204, 101, 192);
	stroke(127, 63, 120);

	//Shapes
	for (i = 0; i < 5; i++) {

		ellipse(x[i], y[i], 100, 100);

	}

}


function draw() {
	
}


/*
for (初期化: 条件; 表現) {
	繰り替えされる内容
}
*/
