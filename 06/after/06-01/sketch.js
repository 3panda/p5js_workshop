//変数
var colorSet;                //色の情報を格納する変数
var colorChanged             //色が変わっているかどうかを監視するための変数

//setup
function setup() {
	createCanvas(500, 400);
	background(51,54,49);
	fill(204, 101, 192);
	noStroke();
	//初期化
	colorSet = color(215, 0, 58);
	colorChanged = false;

}


//draw
function draw() {
	background(51,54,49);
	Ball(250, 200, 100, colorSet);

	//Debug用にテキストを表示　textSize(サイズ)　text("文字列" , x座標, y座標);
	//textSize(32);
	//text(colorChanged, 50, 350);

}


//mouseClicked
function mouseClicked() {

	if (colorChanged == false) {
		colorSet = color(218, 82, 56);
		colorChanged = true;

	} else {
		colorSet = color(215, 0, 58);
		colorChanged = false;
	}

}



//BAll
function Ball(_x, _y, _d, _color) {
	fill(_color);
	ellipse(_x, _y, _d, _d, _color);
}

