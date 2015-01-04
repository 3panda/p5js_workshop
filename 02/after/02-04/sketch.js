
//配列を宣言
var x = [50, 150, 250, 350, 450];
var y = [50, 125, 200, 275, 350];


function setup() {
	createCanvas(500, 400);
	background(200);
	fill(204, 101, 192);
	stroke(127, 63, 120);

	//配列の長さ
	var array_h = x.length;

	for (i = 0; i < array_h; i++) {
		ellipse(x[i], y[i], 100, 100);
	}

}


function draw() {
	
}


//配列の長さは
//配列の名前.length
//で取得出来ます。
//配列x の長さ 配列xとyは同じ長さになるので今回はどちらの長さでもOK

