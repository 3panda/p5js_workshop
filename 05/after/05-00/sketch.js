	
function setup() {
	createCanvas(500, 400);
	background(51,54,49);
	noStroke();
	background(51,54,49);

	var num1 = 18;
	var num2 = 25;
	var num3 = 43;


	//比較した結果をalertするプログラム
	if (num1 > num2){
		alert(num1 + "と" + num2 + "では" + num1 + "が大きい");
	}else{
		alert(num1 + "と" + num2 + "では" + num2 + "が大きい");
	}

	if (num1 > num3){
		alert(num1 + "と" + num3 + "では" + num1 + "が大きい");
	}else{
		alert(num1 + "と" + num3 + "では" + num3 + "が大きい");
	}

	if (num2 > num3){
		alert(num2 + "と" + num3 + "では" + num2 + "が大きい");
	}else{
		alert(num2 + "と" + num3 + "では" + num3 + "が大きい");
	}

	//同じ処理なので関数hikakuを作り実行
	//hikaku(num1, num2);
	//hikaku(num1, num3);
	//hikaku(num2, num3);

}


function draw() {

}

//hikaku関数
function hikaku(n1, n2){
  if (n1 > n2){
    alert(n1 + "と" + n2 + "では" + n1 + "が大きい");
  }else{
    alert(n1 + "と" + n2 + "では" + n2 + "が大きい");
  }
}






/*
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

##スコープ
###グローバル変数
関数の外（トップレベル）で宣言した変数
→プログラム全体から参照できる

###ローカル変数
関数の中で宣言した変数, 関数の仮引数
→その関数の中でのみ参照できる

*/
