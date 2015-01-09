var x; //x座標の変数
var y; //y座標の変数
var d; //○の直径の変数

function setup() {
	createCanvas(500, 400);
	background(51,54,49);
	noStroke();
	background(51,54,49);
	
	//変数に値を入れる
	 x = 50;                           　//x座標の変数
	 y = 200;                          　//y座標の変数
	 d = 20;                           　//○の直径の変数

	//変数を使って5つの○を描画
	fill(137, 34, 138);                   　　　　   //塗りを指定
	ellipse(x, y, d, d);                  //中心の○
	ellipse(x + d,   y - d,   d, d);　　　//中心の○から,○1つ分右,○1つ分斜め上
	ellipse(x + d*2, y - d*2, d, d);　　　//中心の○から,○2つ分右,○2つ分斜め上
	ellipse(x + d,   y + d,   d, d);      //中心の○から,○1つ分右,○1つ分斜め下
	ellipse(x + d*2, y + d*2, d, d);      //中心の○から,○2つ分左,○2つ分斜め下

	//Arrowを生成
	Arrow(200, 200, 30, color(215, 0, 58));
	
	//Arrowを生成
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



/*
fill()で指定する色情報をcolor()を使って変数に代入できます。


fill(215, 0, 58);
↓
var c = color(215, 0, 58);
fill(c);


*/
