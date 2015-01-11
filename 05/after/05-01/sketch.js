	
function setup() {
	createCanvas(500, 400);
	background(51,54,49);
	noStroke();

	Ball01();	
	Ball(140, 200, 100, color(215, 0, 58));
	Ball(360, 200, 100, color(218, 82, 56));

}


function draw() {

}


//Ball01
//Ball01()は以下をまとめただけの関数
//fill(137, 34, 138);
//ellipse(250, 200, 100,100);

function Ball01() {
	fill(137, 34, 138);
	ellipse(250, 200, 100, 100);
}



//Ball
//Ball関数はX座標,Y座標,塗りの色情報を
//引数に渡して指定出来るようにした関数

function Ball(_x, _y, _d, _color) {
	fill(_color);
	ellipse(_x, _y, _d, _d, _color);
}



/*
※color()
http://p5js.org/reference/#/p5/color

fill()で指定する色情報をcolor()を使って変数に代入できます。


fill(215, 0, 58);
↓
var c = color(215, 0, 58);
fill(c);



#関数
繰り返し行う処理をまとめる


function 関数名(){
  実行される処理;
}

setupもdraw関数


##引数
引数を使って関数へ値を渡す

function 関数名(引数1, 引数2, ...){
  実行される処理1;
  実行される処理2;
}


*/
