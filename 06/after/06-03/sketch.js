//変数と配列
var colorValue = []; //色の情報を格納する配列
var rgbStep  = [];   //R,G,Bの変化の値を格納する配列

//setup
function setup() {
	createCanvas(500, 400);
	//background(51,54,49);
	
	//初期化
	colorSet   = color(0, 204, 198); //基本の色情報をcolorSetに設定
	colorValue[0] = red(colorSet);   //colorSetからRの情報を取得
	colorValue[1] = green(colorSet); //colorSetからGの情報を取得
	colorValue[2] = blue(colorSet);　//colorSetからBの情報を取得
	rgbStep       = [4, 4, 0];       // R,G,Bの変化の値を配列に指定 R,G,Bの順番

}


//draw
function draw() {
	//背景色を設定する
	background(color(colorValue[0], colorValue[1], colorValue[2]));
	
}


//マウスが動いている時
//touchMoved
function touchMoved() {
	//配列colorValueのindexの数を数えておく
	var colorValueMax =  colorValue.length;

	//R,G,Bそれぞれに変化の値を加算
	for (var i = 0; i < colorValueMax; i++) {
		colorValue[i] = colorValue[i] + rgbStep[i];

		//R,G,Bの値は最大値を超えたら加算、最小値を下回ったら減算
		if (colorValue[i] > 255 || colorValue[i] < 0) {
			rgbStep[i] = -rgbStep[i];
		}
		
	}

}


/*
	console.log("R:" + colorValue[0]);
	console.log("G:" + colorValue[1]);
	console.log("B:" + colorValue[2]);
*/
