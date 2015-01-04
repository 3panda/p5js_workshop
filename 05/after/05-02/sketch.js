var x;                                 //x座標用の変数
var y;                                 //y座標用の変数
var d;                                 //○の直径用の変数

var yMove1;                            //動かすBall用のy座標用の変数1
var xMove1;                            //動かすBall用のx座標用の変数2
var xMove2;                            //動かすBall用のy座標用の変数2
var xSpeed1;                           //動かすBall用のx座標の移動量の変数1
var ySpeed1;                           //動かすBall用のy座標の移動量の変数1
var xSpeed2;                           //動かすBall用のx座標の移動量の変数2
var ySpeed2;                           //動かすBall用のy座標の移動量の変数2
var d1;                                //○の直径用の変数1
var d2;                                //○の直径用の変数2

function setup() {
	createCanvas(500, 400);
	background(51,54,49);
	noStroke();

	//動かさないArrowの初期設定
	x = width/2;                         //画面の幅の半分=中心
	y = height/2;　　　　　　　　　      //画面の縦の半分=中心
	d =20;

	//動かすArrow1つ目の初期設定
	xMove1 = width/2;
	yMove1 = height/2;
	d1 =20;
	xSpeed1 = -3;
	ySpeed1 = 0;

	//Arrow2つ目の初期設定
	xMove2 = width/2;
	yMove2 = height/2;
	d2 =20;
	xSpeed2 = 3;
	ySpeed2 = 0;

}


function draw() {
	background(51,54,49);
	
	//動かさないArrow
	fill(137, 34, 138);                   //塗り
  Arrow(x, y, d);                       //Arrow

	//動かすArrow 1つ目
	xMove1 = xMove1 + xSpeed1;            //x座標移動量を追加
	yMove1 = yMove1 + ySpeed1;            //y座標移動量を追加
	fill(215, 0, 58);　　　　　         　//塗り
	Arrow(xMove1, yMove1, d1);            //Arrow
	
	//動かすArrow 2つ目
	xMove2 = xMove2 + xSpeed2;            //x座標移動量を追加
	yMove2 = yMove2 + ySpeed2;            //y座標移動量を追加
	fill(218, 82, 56);　　　　　          //塗り
	Arrow(xMove2, yMove2, d2);            //Arrow

}

//Arrow
function Arrow(_x, _y, _d) {
  var x, y, d;
  x = _x;
  y = _y;
  d = _d;
	
  ellipse(x, y, d, d);
	ellipse(x + d,   y - d,   d, d);
	ellipse(x + d*2, y - d*2, d, d);
	ellipse(x + d,   y + d,   d, d);
	ellipse(x + d*2, y + d*2, d, d);
	
}

