
//変数の宣言
var d;　　　　　 //オブジェクトの直径　Diameter の d
var r;　　       //オブジェクトの半径  Radius の r
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

	d = 100; 
	r = d/2;
	x = r;
	y = r;
	xSpeed = 5;
	ySpeed = 1;


}

function draw() {
	//繰り返し実行
	background(200);
	ellipse(x, y, d, d);
	x = x + xSpeed;
	y = y + ySpeed;
	

	if(x > width - r || x < 0 + r) {
		xSpeed = -xSpeed;
	}

	if(y > height - r || y < 0 + r) {
		ySpeed = -ySpeed;
	}

}


//論理演算子 
/*
|| OR

&& AND

! NOT

*/
