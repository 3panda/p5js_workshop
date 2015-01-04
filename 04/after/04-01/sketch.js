
//変数を宣言
var MAX;          //表示するオブジェクトの最大数

//配列を宣言
var x = [];       //オブジェクトのx座標の配列
var y = [];       //オブジェクトのy座標の配列
var d = [];       //オブジェクトの直径の配列
var r = [];       //オブジェクトの半径の配列
var xSpeed = [];  //オブジェクトのx方向への移動速度の配列
var ySpeed = [];  //オブジェクトのy方向への移動速度の配列

function setup() {

//初期化
	MAX = 100;
	xSpeed = [MAX];
	ySpeed = [MAX];
	x = [MAX];
	y = [MAX];
	d = [MAX];
	r = [MAX];

	createCanvas(500, 400);
	noStroke();
	fill(0,64,255,100);	

	for ( i = 0; i < MAX; i++) {
		xSpeed[i] = floor(random(-4,4));
		ySpeed[i] = floor(random(-6,6));
		d[i] = floor(random(10, 40));
		r[i] = d[i]/2;
		x[i] = floor(random(0 + r[i], width  - r[i]));
		y[i] = floor(random(0 + r[i], height - r[i]));
	}
	
}


function draw() {
	background(0);

	var array_l = x.length;	
	for (var i = 0; i < array_l; i++) {
		ellipse(x[i],y[i],d[i],d[i]);

		x[i] = x[i] + xSpeed[i];
		y[i] = y[i] + ySpeed[i];

		if (x[i] > width - r[i] || x[i] < 0 + r[i]) {
			xSpeed[i] = -xSpeed[i];
		}

		if (y[i] > height - r[i] || y[i] < 0 + r[i]) {
			ySpeed[i] = -ySpeed[i];
		}
	}

}


