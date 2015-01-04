
//変数の宣言
//var WiDTH = 500;
//var HEIGHT = 400;
var x;           //オブジェクトのx座標
var y;　　　　　 //オブジェクトのy座標
var xSpeed;　　　//オブジェクトのx座標の移動速度
var ySpeed;　　　//オブジェクトのy座標の移動速度


function setup() {
	//一度だけ実行
	createCanvas(500, 400);
	background(200);
	fill(204, 101, 192);
	stroke(127, 63, 120);

	//初期化
	x = 0;
	y = 0;
	xSpeed = 5;
	ySpeed = 1;

}


function draw() {
	//繰り返し実行
	background(200);
	ellipse(x, y, 100, 100);
	x = x + xSpeed;
	y = y + ySpeed;

	if(x > width || x < 0) {
		xSpeed = -xSpeed;
	} else {
		xSpeed = xSpeed;
	}

	if(y > height || y < 0) {
		ySpeed = -ySpeed;
	} else {
		ySpeed = ySpeed;
	}

}




//論理演算子 
/*
|| OR

&& AND

! NOT

*/
