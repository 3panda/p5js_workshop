var x;                                 //動かさないArrowのx座標の変数
var y;                                 //動かさないArrowのy座標の変数
var d;                                 //動かさないArrowの○の直径の変数
var c;                                 //動かさないArrowの塗りの色の変数

var xMove1;                            //動かすArrow1のx座標の変数1
var yMove1;                            //動かすArrow1のy座標の変数1
var xSpeed1;                           //動かすArrow1のx座標の移動量の変数1
var d1;                                //動かすArrow1の○の直径の変数1
var c1;　　　　　　　　　　　　　　　　//動かすArrow1の塗りの色の変数1

var xMove2;                            //動かすArrow2のx座標の変数2
var yMove2;                            //動かすArrow2のy座標の変数2
var xSpeed2;                           //動かすArrow2のx座標の移動量の変数2
var d2;                                //動かすArrow2○の直径の変数2
var c2;                                //動かすArrow1の塗りの色の変数2

function setup() {
	createCanvas(500, 400);
	background(51,54,49);
	noStroke();

	//動かさないArrowの初期設定
	x = width/2;                         //画面の幅の半分=中心
	y = height/2;　　　　　　　　　      //画面の縦の半分=中心
	d =20;                               //直径
	c = color(137, 34, 138);　　　　　　 //塗りの色

	//動かすArrow1の初期設定
	xMove1  = width/2;
	yMove1  = height/2;
	d1      = 20;
	c1      = color(215, 0, 58);
	xSpeed1 = -3;

	//Arrow2の初期設定
	xMove2  = width/2;
	yMove2  = height/2;
	d2      = 20;
	c2      = color(218, 82, 56);
	xSpeed2 = 3;

}


function draw() {
	background(51,54,49);
	
	//動かさないArrow
  Arrow(x, y, d, c);                       //Arrow

	//動かすArrow1
	xMove1 = xMove1 + xSpeed1;            //x座標移動量を追加
	Arrow(xMove1, yMove1, d1, c1);            //Arrow
	
	//動かすArrow2
	xMove2 = xMove2 + xSpeed2;            //x座標移動量を追加
	Arrow(xMove2, yMove2, d2, c2);            //Arrow

}


//Arrow
function Arrow(_x, _y, _d, _color) {
	fill(_color);                               //塗り
	ellipse(_x, _y, _d, _d);                    //中心の○
	ellipse(_x + _d,   _y - _d,   _d, _d);      //中心の○から,○1つ分右,○1つ分斜め上
	ellipse(_x + _d*2, _y - _d*2, _d, _d);　　　//中心の○から,○2つ分右,○2つ分斜め上
	ellipse(_x + _d,   _y + _d,   _d, _d);      //中心の○から,○1つ分右,○1つ分斜め下
	ellipse(_x + _d*2, _y + _d*2, _d, _d);      //中心の○から,○2つ分左,○2つ分斜め下	
}

