//変数
var colorSet;   //背景色の色情報を格納する変数
var redValue; 　//colorSetからRの色情報を格納するための変数
var greenValue; //colorSetからGの色情報を格納するための変数
var blueValue;  //colorSetからBの色情報を格納するための変数
var stepRed;    //Rの変化の値を格納する変数
var stepGreen;　//Gの変化の値を格納する変数
var steBlue;　  //Bの変化の値を格納する変数


//setup
function setup() {
	createCanvas(500, 400);
	background(51,54,49);
	
	//初期化
	colorSet   = color(0, 204, 198); //基本の色情報をcolorSetに設定
	redValue   = red(colorSet);      //colorSetからRの情報を取得
	greenValue = green(colorSet);    //colorSetからGの情報を取得
	blueValue  = blue(colorSet);     //colorSetからBの情報を取得
	stepRed    = 4;                  //Rの変化の値を指定
	stepGreen  = 4;                  //Gの変化の値を指定
	stepBlue   = 0;                  //Bの変化の値を指定
}


//draw
function draw() {
	//背景色を設定する
	background(color(redValue, greenValue, blueValue));
}


//マウスがクリックしながら動いている時
//touchMoved
function touchMoved() {
	//R,G,Bそれぞれに変化の値を加算
	redValue   = redValue   + stepRed;
	greenValue = greenValue + stepGreen;
	blueValue  = blueValue  + stepBlue;

	
	//R,G,Bの値は最大値を超えたら加算、最小値を下回ったら減算
	//R
	if (redValue > 255 || redValue < 0) {
		stepRed = -stepRed;
	}

	//G
	if (greenValue > 255 || greenValue < 0) {
		stepGreen = -stepGreen;
	}

	//B
	if (blueValue > 255 || blueValue < 0) {
		stepBlue = -stepBlue;
	}

}


/*
	console.log("R:" + colorValue[0]);
	console.log("G:" + colorValue[1]);
	console.log("B:" + colorValue[2]);

*/

