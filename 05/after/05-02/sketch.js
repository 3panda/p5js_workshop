
function setup() {
	createCanvas(500, 400);
	background(51,54,49);
	noStroke();
	background(51,54,49);
	
	fill(137, 34, 138);                           //塗り
	ellipse(50, 200, 20, 20);                     //中心の○
	ellipse(50 + 20,   200 - 20,   20, 20);       //中心の○から,○1つ分右,○1つ分斜め上
	ellipse(50 + 20*2, 200 - 20*2, 20, 20);       //中心の○から,○2つ分右,○2つ分斜め上
	ellipse(50 + 20,   200 + 20,   20, 20);       //中心の○から,○1つ分右,○1つ分斜め下
	ellipse(50 + 20*2,  200 + 20*2, 20, 20);      //中心の○から,○2つ分左,○2つ分斜め下

	//Arrow関数
	Arrow(200, 200, 30, color(215, 0, 58));
	
	//Arrow関数
	Arrow(370, 200, 50, color(218, 82, 56));

}


function draw() {

}

//5つの○を描画する処理を関数Arrowにする
//引数を設定しX,Y座標,直径,塗りの色を指定出来るようにする

//Arrow
function Arrow(_x, _y, _d, _color) {
	fill(_color);                               //塗り
	ellipse(_x, _y, _d, _d);                    //中心の○
	ellipse(_x + _d,   _y - _d,   _d, _d);      //中心の○から,○1つ分右,○1つ分斜め上
	ellipse(_x + _d*2, _y - _d*2, _d, _d);　　　//中心の○から,○2つ分右,○2つ分斜め上
	ellipse(_x + _d,   _y + _d,   _d, _d);      //中心の○から,○1つ分右,○1つ分斜め下
	ellipse(_x + _d*2, _y + _d*2, _d, _d);      //中心の○から,○2つ分左,○2つ分斜め下
}

