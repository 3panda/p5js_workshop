
//変数を宣言
var MAX;          //雪の最大数

//配列を宣言
var x = [];       //雪のx座標の配列
var y = [];       //雪のy座標の配列
var d = [];       //雪の直径の配列
var r = [];       //雪の半径の配列
var a = [];       //雪の透明度の配列
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
		d[i] = floor(random(5, 20));
		r[i] = d[i]/2;
		x[i] = floor(random(0 + r[i], width  - r[i]));
		y[i] = floor(random(0 + r[i], height - r[i]));
		a[i] = floor(random(20, 100));
		ySpeed[i] = floor(random(3, 6));;
	}

}

function draw() {
	background(51,54,49);
		for (var i =0; i < MAX; i++) {
			Snow(x[i],y[i],d[i],a[i]);
			y[i] = y[i] + ySpeed[i];

			if (y[i] > height) {
				y[i] = -10;
			}

		}

}

//Snow
function Snow (_x, _y, _d, _a) {
	fill(255, 255, 255, _a);
	ellipse(_x, _y, _d, _d);
}


//Flower
function Flower(_d, _x, _y) {
	var d = _d;                              //中心の円の半径

	//※中心の円の半径基準に以下を描画
	var xPos =  _x;
	var yPos =  _y;

	//※以下は中心の円を基準に描画
	var p_yPos   = d*2;　　　　　　　　　    //花びらのY座標は中心の円の二倍 ※X座標は0
	var p_width  = d;　　　　　　　　　      //花びらの幅 中心の円の直径
	var p_height = d*3;　　　　　　　　　    //花びらの縦幅 中心の円の直径の三倍

	fill(204, 101, 192);                     //花の中心の塗り
	noStroke();　　　　　　　　　　　　　    //枠線は無し
	ellipse(xPos, yPos, d, d);               //花の中心を描画
	push();                                  //描画の状態を初期化

	translate(xPos, yPos);                   //描画の基準位置を中心の円の座標に変更
	fill(100, 101, 192);　　　　　　　　　   //花びらの塗りの指定
	//花びらを8枚描画
	for (var i = 0; i < 8; i++) 
	{
		rotate(PI/4.0);　　　　　　　　　　    //10度づつ傾ける
		ellipse(0, p_yPos, p_width, p_height); //花びらの描画
	}
	
	pop();　　　　　　　　　　　　　　　     //描画の状態を復元する　→　花びらの設定を終了する
	
}


//角度の計算
//30度	45度	60度	90度	180度	360度
//π/6	π/4	π/3	π/2	π	2π
//PI/6	PI/4	PI/3	PI/2	PI	2PI

