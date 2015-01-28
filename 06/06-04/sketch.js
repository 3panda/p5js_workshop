//変数
var d;     //オブジェクトの直径　Diameter の d
var r;     //オブジェクトの半径  Radius の r
var x;     //オブジェクトのx座標
var y;     //オブジェクトのy座標


function setup() {
	createCanvas(500, 400);
	background(51,54,49);
	noStroke();

	//初期化
	d = 50; 
	r = d/2;
	x = width / 2;
	y = height / 2;

}

function draw() {
	background(51,54,49);
	Ball(x, y, d, color(0, 204, 198));

}


//マウスをクリックした時
//mouseClicked
function mouseClicked() {

}

//Ball
function Ball(_x, _y, _d, _color) {
	fill(_color);
	ellipse(_x, _y, _d, _d, _color);

}
