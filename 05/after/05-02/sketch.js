var x;                                 //動かさないArrowのx座標の変数
var y;                                 //動かさないArrowのy座標の変数
var d;                                 //動かさないArrowの○の直径の変数

var xMove1;                            //動かすArrow1のx座標の変数1
var yMove1;                            //動かすArrow1のy座標の変数1
var xSpeed1;                           //動かすArrow1のx座標の移動量の変数1
var ySpeed1;                           //動かすArrow1のy座標の移動量の変数1
var d1;                                //動かすArrow1の○の直径の変数1

var xMove2;                            //動かすArrow2のx座標の変数2
var yMove2;                            //動かすArrow2のy座標の変数2
var xSpeed2;                           //動かすArrow2のx座標の移動量の変数2
var ySpeed2;                           //動かすArrow2のy座標の移動量の変数2
var d2;                                //動かすArrow2○の直径の変数2

function setup() {
	createCanvas(500, 400);
	background(51,54,49);
	noStroke();

	//動かさないArrowの初期設定
	x = width/2;                         //画面の幅の半分=中心
	y = height/2;　　　　　　　　　      //画面の縦の半分=中心
	d =20;

	//動かすArrow1の初期設定
	xMove1 = width/2;
	yMove1 = height/2;
	d1 =20;
	xSpeed1 = -3;
	ySpeed1 = 0;

	//Arrow2の初期設定
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

	//動かすArrow1
	xMove1 = xMove1 + xSpeed1;            //x座標移動量を追加
	yMove1 = yMove1 + ySpeed1;            //y座標移動量を追加
	fill(215, 0, 58);　　　　　         　//塗り
	Arrow(xMove1, yMove1, d1);            //Arrow
	
	//動かすArrow2
	xMove2 = xMove2 + xSpeed2;            //x座標移動量を追加
	yMove2 = yMove2 + ySpeed2;            //y座標移動量を追加
	fill(218, 82, 56);　　　　　          //塗り
	Arrow(xMove2, yMove2, d2);            //Arrow

}

//Arrow
function Arrow(_x, _y, _d) {
	//関数Arrow内での変数を宣言
	var x;
	var y;
	var d;
	
	//関数Arrow内での変数に引数を設定
	x = _x;                            //引数 _xを受け取る
	y = _y;                            //引数 _yを受け取る
	d = _d;                            //引数 _dを受け取る
	
  ellipse(x, y, d, d);
	ellipse(x + d,   y - d,   d, d);
	ellipse(x + d*2, y - d*2, d, d);
	ellipse(x + d,   y + d,   d, d);
	ellipse(x + d*2, y + d*2, d, d);
	
}

