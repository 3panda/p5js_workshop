//変数を宣言
var MAX;          //雪の最大数

//配列を宣言
var x = [];       //雪のx座標の配列
var y = [];       //雪のy座標の配列
var d = [];       //雪の直径の配列
var r = [];       //雪の半径の配列
var a = [];       //雪の透明度の配列
var ySpeed = [];  //雪の移動速度の配列

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
	var swing;                                //横に少し揺らすための変数を宣言
	var startPosition = 10;                   //画面の外に出たら戻す位置

	for (var i =0; i < MAX; i++) {
		swing =  random(-0.05, 0.05) * d[i];    //乱数に雪の大きさを乗算して揺れの値を作る
		Snow(x[i],y[i],d[i],a[i]);　　　　　　　//Snow関数を実行

		x[i] = x[i] + swing;　　　　　　　　　　//Snowのx座標にて揺れの値を追加して揺らす
		y[i] = y[i] + ySpeed[i];

		//画面の下まで移動したらstartPositionへ
		if (y[i] > height) {
			y[i] = startPosition;
		}

	}

}


//Snow関数
function Snow (_x, _y, _d, _a) {
	fill(255, 255, 255, _a);
	ellipse(_x, _y, _d, _d);
}

