//変数の宣言
var WIDTH  = 500;//画面の横幅
var HEIGHT = 400;//画面の縦幅

//配列を宣言
var x = [50, 150, 250, 350, 450];
var y = [50, 125, 200, 275, 350];


function setup() {
	createCanvas(WIDTH, HEIGHT);
	background(200);

	//set colors
	fill(204, 101, 192);
	stroke(127, 63, 120);

	//配列の長さ
	var array_h = x.length;
	var i = floor(random(0, array_h));
	//var i = floor(random(0, 5));
	//var i = floor(random(5));
	//var i = floor(random(array_h));


	//Shapes
	ellipse(x[i], y[i], 100, 100);

}


function draw() {
	
}


/*
#解説

##乱数
random(最小値,最大値)
//最小値から最大値の値をランダムに返す
//少数も含む

##floor
//引数として与えた数以下の最大の整数を返す
floor(数値);

 */
