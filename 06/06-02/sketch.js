//変数
var normalColor;  //通常の色の情報を格納する変数
var changedColor; //変化後の色情報を格納する変数
var colorFlag;    //色が変わっているかどうかを監視するための変数
var colorSet;     //背景色の色情報を格納する変数


//setup
function setup() {
	createCanvas(500, 400);
	background(51,54,49);
	noStroke();

	//通常時の色
	normalColor  = color(89, 185, 198);

	//変化後の色
	changedColor = color(198, 89, 125);

	//色情報の初期化 通常時の色情報(normalColor)の値を入れる
	colorSet = normalColor

	//色は初期状態では変化していないのでfalseに
	colorFlag = false;

}


//draw
function draw() {
	//背景色をcolorSetの色情報に
	background(colorSet);
	
}


//マウスをクリックした時
//mouseClicked
function mouseClicked() {
	
	//colorFlagがfalseの場合
	if (colorFlag == false) {
		//マウスをクリックしたら色の情報をchangedColorに変更
		colorSet = changedColor;

		//色の状態が変化したのでcolorFlagをtrueに
		colorFlag = true;

	//colorFlagがtrueの場合
	} else {
		//マウスをクリックしたら色の情報をnormalColorに変更
		colorSet = normalColor;

		//色の状態が戻ったのでをfalseに
		colorFlag = false;
	}

}
