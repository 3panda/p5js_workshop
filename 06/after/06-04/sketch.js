//変数
var d;     //オブジェクトの直径　Diameter の d
var r;     //オブジェクトの半径  Radius の r
var x;     //オブジェクトのx座標
var y;     //オブジェクトのy座標
var nx;    //ユーザーのx座標
var ny;    //ユーザーのy座標
var delay; //オブジェクトの動きを遅延させる値

function setup() {
	createCanvas(500, 400);
	background(51,54,49);
	noStroke();

	//初期化
	d = 50; 
	r = d/2;
	x = width / 2;
	y = height / 2;

	//マウスをクリックされるまではx,y座標の値を入れる
	nx = x;
	ny = y;

	//遅れてオブジェクトが動く値を指定
	delay = 15;

}

function draw() {
	background(51,54,49);
	//sinを利用してオブジェクトの直径を拡大縮小させる
	d = d + sin(frameCount / 15);
	
	//オブジェクトとユーザーの距離を計算
	//遅延させる値(delay)の値で割った値を加算
	//繰り替えす事で徐々に近づける
	x += (nx-x) / delay;
	y += (ny-y) / delay;
	
	Ball(x, y, d, color(0, 204, 198));

}


//マウスをクリックした時
//mouseClicked
function mouseClicked() {
	//ユーザーのx,y座標を取得
	nx = mouseX;
	ny = mouseY;
}

//Ball
function Ball(_x, _y, _d, _color) {
	fill(_color);
	ellipse(_x, _y, _d, _d, _color);

}


//#mouseX
//http://p5js.org/reference/#/p5/mouseX
//マウスのx座標
//
//#mouseY
//http://p5js.org/reference/#/p5/mouseY
//マウスのy座標

//#frameCount()
//http://p5js.org/reference/#/p5/frameCount
//フレーム数をカウントする
//
//#frameRate()
//フレームレイトを指定する。指定しなければ30fps(フレーム/秒)となる

//#sin()
//http://p5js.org/reference/#/p5/sin

//#オブジェクトの拡大の部分
//##d = d + sin(frameCount / 15)
//dに毎フレームsin(frameCount / 15)で計算された値を加算
//
//##sin(frameCount/15)の部分
//sin(frameCount)の場合、一定の間隔で1〜-1の値が返るので
//dの変化はd+1〜d-1（d = 50;の場合は49〜51の間）になる
//
//任意の値（今回は15）で割る事でフレームが進むタイミングとずれた状態で
//値がdに加算されるためdの値はd + 1以上とd -1以下に
//なり変化が大きくなる
//frameCountを割る数字を大きくする事で変化は大きくなるが
//変化はゆっくりになる


//#console.log
//console.log("nx:" + nx);
//console.log("ny:" + ny);
//console.log("x:" + x);
//console.log("y:" + y);

