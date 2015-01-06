
//変数を宣言
var MAX;             //雪の最大数

//配列を宣言
var x = [];          //雪のx座標の配列
var y = [];          //雪のy座標の配列
var d = [];          //雪の直径の配列
var r = [];          //雪の半径の配列
var a = [];          //雪の透明度の配列
var ySpeed = [];     //雪の移動速度の配列

function setup() {
	createCanvas(500, 400);
	background(51,54,49); 
	noStroke();


//初期化
	MAX = 100;
	ySpeed[MAX];
	x = [MAX];
	y = [MAX];
	d = [MAX];
	r = [MAX];
	a = [MAX];

	for (var i =0; i < MAX; i++) {
		d[i] = floor(random(2, 20));
		r[i] = d[i]/2;
		x[i] = floor(random(0 + r[i], width  - r[i]));
		y[i] = floor(random(0 + r[i], height - r[i]));
		a[i] = floor(random(20, 100));
		ySpeed[i] = floor(random(2, 4));;
	}

}

function draw() {
	background(51,54,49);

	for (var i =0; i < MAX; i++) {
		Snows(i);
	}

}

//Snows
function Snows (_i) {
	var i = _i;                             //for文のiを代入
	var swing =  random(-0.5, 0.5);　　　　 //左右の横揺れのためにランダムで値を作成
	var s = 10;                             //画面の縦の端(height)まで来たら戻る位置

	fill(255, 255, 255, a[i]);
	ellipse(x[i], y[i], d[i], d[i]);

	x[i] = x[i] + swing;
	y[i] = y[i] + ySpeed[i];

	//画面の一番下までいったらsまでもどる
	if (y[i] > height) {
		y[i] = s;
	}
	
}
