
//Array
var x = [50, 150, 250, 350, 450];
var y = [50, 125, 200, 275, 350];


function setup() {
	createCanvas(500, 400);//画面の幅と高さを変数にしましょう
	background(200);
	fill(204, 101, 192);
	stroke(127, 63, 120);
	
	ellipse(50, 50, 100, 100);
	
	var r = floor(random(0,10));

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
