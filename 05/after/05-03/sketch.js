var xMove1;                            //動かすArrow1のx座標の変数1
var yMove1;                            //動かすArrow1のy座標の変数1
var xMove2;                            //動かすArrow2のx座標の変数2
var yMove2;                            //動かすArrow2のy座標の変数2

function setup() {
	createCanvas(500, 400);
	background(51,54,49);
	noStroke();

	//動かすArrow1の初期設定
	xMove1  = width/2;
	yMove1  = height/2;

	//Arrow2の初期設定
	xMove2  = width/2;
	yMove2  = height/2;

}


function draw() {
	background(51,54,49);
	
	//動かさないArrow
  Arrow(width/2, height/2, 20, color(137, 34, 138));         //Arrow

	//動かすArrow1
	xMove1 = xMove1 - 3;                                       //x座標移動量を追加
	Arrow(xMove1, yMove1, 20, color(215, 0, 58));              //Arrow

	//動かすArrow2
	xMove2 = xMove2 + 3;                                       //x座標移動量を追加
	Arrow(xMove2, yMove2, 20, color(218, 82, 56));             //Arrow

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

