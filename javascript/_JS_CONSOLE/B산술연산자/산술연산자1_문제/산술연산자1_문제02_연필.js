/*
	[문제]	  	
		철수는 학용품 정리를 하고있다.
		가지고있는 지우개와 볼펜과 연필을 모두 합치니 27개였다.
		지우개는 12개이고 볼펜이 7개라고하면, 
		연필은 모두 몇개인지 구하시오.
	[정답] 
		8
*/

var total = 27;
var eraser = 12;
var pen = 7;
var pencil = total - eraser - pen;

console.log("연필은", pencil, "개");
