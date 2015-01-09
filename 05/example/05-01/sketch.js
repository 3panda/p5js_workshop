
function setup(){
	createCanvas(500, 400);
	background(51,54,49);
}

function draw() {
	background(51,54,49);
	push();
	translate(width/2, height/2);           //描画の基準位置を画面の中心に指定する→横幅の半分,縦幅の半分
	rotate(frameCount / 150.0);　　　　　　 //毎秒30フレーム/150.0 →10秒で2度 360度(1周約18秒)
																					//console.log((frameCount/30)+"秒" +(frameCount / 150.0) +"度");
																					//console.log("Angle:"+(frameCount / 150.0));
	//花を描く
	Flower(20, 0, 0, color(204, 101, 192), color(100, 101, 192));
	
	//花を8枚円形に描く
	for(var i= 0; i < 8; i++) {
		rotate(PI/4);　　　　　　　　　　　                                //傾きを60度加える
		Flower(10, 100, 100, color(204, 101, 192), color(100, 101, 192));  //花を描画
	}
	
	pop();

}


//Flower
function Flower(_d, _x, _y, _cColor, _pColor) {
	//※以下は中心の円を基準に描画
	var p_yPos   = _d*2;　　　　　　　　　    //花びらのY座標は中心の円の二倍 ※X座標は0
	var p_width  = _d;　　　　　　　　　      //花びらの幅 中心の円の直径
	var p_height = _d*3;　　　　　　　　　    //花びらの縦幅 中心の円の直径の三倍

	fill(_cColor);                     //花の中心の塗り
	noStroke();　　　　　　　　　　　　　    //枠線は無し
	ellipse(_x, _y, _d, _d);                 //花の中心を描画
	push();                                  //描画の状態を初期化

	translate(_x, _y);                       //描画の基準位置を中心の円の座標に変更
	fill(_pColor);　　　　　　　　　         //花びらの塗りの指定
	//花びらを8枚描画
	for (var i = 0; i < 8; i++) {
		rotate(PI/4.0);　　　　　　　　　　    //10度づつ傾ける
		ellipse(0, p_yPos, p_width, p_height); //花びらの描画
	}
	
	pop();　　　　　　　　　　　　　　　     //描画の状態を復元する　→　花びらの設定を終了する
	
}


//角度の計算
//30度	45度	60度	90度	180度	360度
//π/6	π/4	π/3	π/2	π	2π
//PI/6	PI/4	PI/3	PI/2	PI	2PI

