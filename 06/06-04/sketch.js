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


//mouseX
//http://p5js.org/reference/#/p5/mouseX
//マウスのx座標
//
//mouseY
//http://p5js.org/reference/#/p5/mouseY
//マウスのy座標

//frameCount()
//http://p5js.org/reference/#/p5/frameCount
//フレーム数をカウントする
//
//frameRate()
//フレームレイトをしていする。指定しなければ30fps(フレーム/秒)となる

//sin()
//http://p5js.org/reference/#/p5/sin
//sinの角度を計算する
//
//sin(n)
//-1 〜 1の範囲の数が返される
//
//ex)
//n = 1
//0.8414709848078965
//n = 2
//0.9092974268256817
//n = 3
//0.1411200080598672
//n = 4
//-0.7568024953079282
//n = 5
//-0.9589242746631385
//n = 6
//-0.27941549819892586
//n = 7
//0.6569865987187891


//console.log("test:" + test);
//console.log("nx:" + nx);
//console.log("ny:" + ny);
//console.log("x:" + x);
//console.log("y:" + y);

