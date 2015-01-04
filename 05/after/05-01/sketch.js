var x; //x座標用の変数
var y; //y座標用の変数
var d; //○の直径用の変数

	
function setup() {
	createCanvas(500, 400);
	background(51,54,49);
	noStroke();
	background(51,54,49);
	
	//変数に値を入れる
	x = 50;
	y = 200;
	d = 20;

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

//Arrow
function Arrow(_x, _y, _d) {
  var x, y, d;
  x = _x;
  y = _y;
  d = _d;
	
  ellipse(x, y, d, d);                  //中心の○
	ellipse(x + d,   y - d,   d, d);　　　//中心の○から,○1つ分右,○1つ分斜め上
	ellipse(x + d*2, y - d*2, d, d);　　　//中心の○から,○2つ分右,○2つ分斜め上
	ellipse(x + d,   y + d,   d, d);      //中心の○から,○1つ分右,○1つ分斜め下
	ellipse(x + d*2, y + d*2, d, d);      //中心の○から,○2つ分左,○2つ分斜め下
	
}

