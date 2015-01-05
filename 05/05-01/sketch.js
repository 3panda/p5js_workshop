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

/*上記は値が入ると以下と同じになります。
	ellipse(250, 120, 20, 20);                    //中心の○
	ellipse(250 + 20,   120 - 20,   20, 20);　　　//中心の○から,○1つ分右,○1つ分斜め上
	ellipse(250 + 20*2, 120 - 20*2, 20, 20);　　　//中心の○から,○2つ分右,○2つ分斜め上
	ellipse(250 + 20,   120 + 20,   20, 20);      //中心の○から,○1つ分右,○1つ分斜め下
	ellipse(250 + d*2,  120 + 20*2, 20, 20);      //中心の○から,○2つ分左,○2つ分斜め下
*/

}


function draw() {

}
