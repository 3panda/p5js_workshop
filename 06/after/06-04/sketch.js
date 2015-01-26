var d;            //オブジェクトの直径　Diameter の d
var r;            //オブジェクトの半径  Radius の r
var x;            //オブジェクトのx座標
var y;            //オブジェクトのy座標
var colorSet;     //背景色の色情報を格納する変数
var fillColorSet; //塗りの色情報を格納する変数

function setup() {
	createCanvas(500, 400);
	colorSet = color(51,54,49);
	background(colorSet);
	noStroke();

	//初期化
	d = 50; 
	r = d/2;
	x = r;
	y = r;
	xSpeed = 4;
	ySpeed = 2;
	fillColorSet = color(0, 204, 198);

	var colum = width / d;
	var row   = height / d;
	console.log(colum);

	for (var i = 0; i <= colum; i++) {
		Ball(x + d * i, y, d, fillColorSet);
	}


	
}

function draw() {
	
}


//マウスをクリックした時
//mouseClicked
function mouseClicked() {
 //マウスの座標とxとyの二点間の距離を計算
 var _dist = dist(mouseX, mouseY, x, y);
	
	//距離が半径の範囲より小さければ
  if (_dist < r) {
		fillColorSet = colorSet;
	}
	
}

//Ball
function Ball(_x, _y, _d, _color) {
	fill(_color);
	ellipse(_x, _y, _d, _d, _color);

}
