var x; //x座標の変数
var y; //y座標の変数
var d; //○の直径の変数

	
function setup() {
	createCanvas(500, 400);
	background(51,54,49);
	noStroke();
	background(51,54,49);
	
	//変数に値を入れる
	x = 50;
	y = 200;
	d = 20;

	//変数を使って5つの○を描画
	fill(137, 34, 138);                   //塗り
	ellipse(x, y, d, d);                  //中心の○
	ellipse(x + d,   y - d,   d, d);　　　//中心の○から,○1つ分右,○1つ分斜め上
	ellipse(x + d*2, y - d*2, d, d);　　　//中心の○から,○2つ分右,○2つ分斜め上
	ellipse(x + d,   y + d,   d, d);      //中心の○から,○1つ分右,○1つ分斜め下
	ellipse(x + d*2, y + d*2, d, d);      //中心の○から,○2つ分左,○2つ分斜め下

	//塗りを変更
	fill(215, 0, 58);
	//Arrowを生成
	Arrow(200, 200, 30);
	
	//塗りを変更
	fill(218, 82, 56);
	//Arrowを生成
	Arrow(370, 200, 50);

}


function draw() {

}

//5つの○を描画する処理を関数Arrowにする
//引数を設定しX,Y座標と直径を指定出来るようにする

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
	
  ellipse(x, y, d, d);                  //中心の○
	ellipse(x + d,   y - d,   d, d);　　　//中心の○から,○1つ分右,○1つ分斜め上
	ellipse(x + d*2, y - d*2, d, d);　　　//中心の○から,○2つ分右,○2つ分斜め上
	ellipse(x + d,   y + d,   d, d);      //中心の○から,○1つ分右,○1つ分斜め下
	ellipse(x + d*2, y + d*2, d, d);      //中心の○から,○2つ分左,○2つ分斜め下
	
}

