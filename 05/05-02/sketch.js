
function setup() {
	createCanvas(500, 400);
	background(51,54,49);
	noStroke();
	background(51,54,49);
	
  Arrow(width/2, height/2, 20, color (137, 34, 138));
	//width/2→画面の幅の半分=中心
	//height/2→画面の縦の半分=中心
	
}


function draw() {

}

//Arrow
function Arrow(_x, _y, _d, _color) {
	fill(_color);                               //塗り
	ellipse(_x, _y, _d, _d);                    //中心の○
	ellipse(_x + _d,   _y - _d,   _d, _d);      //中心の○から,○1つ分右,○1つ分斜め上
	ellipse(_x + _d*2, _y - _d*2, _d, _d);　　　//中心の○から,○2つ分右,○2つ分斜め上
	ellipse(_x + _d,   _y + _d,   _d, _d);      //中心の○から,○1つ分右,○1つ分斜め下
	ellipse(_x + _d*2, _y + _d*2, _d, _d);      //中心の○から,○2つ分左,○2つ分斜め下	
}

