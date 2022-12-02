/*
  [문제] 
		배열의 값을 그래프로 출력하려고한다.
		graph 배열의 각각의 값만큼 * 을반복적으로 가로로 출력하고,
		다음숫자는 줄을바꿔서 출력하시오.
  [예]
	
	 31  : ***
	 76  : *******
	 54  : *****
	 2   : 
	 100 : **********
	 23  : **
 */


var arr = [31, 76, 54, 2, 100, 23];
var result = [];
for (var i = 0; i < arr.length; i++) {
	result[i] = [];
}

for (var i = 0; i < arr.length; i++) {
	var size = parseInt(arr[i] / 10);
	for (var j = 0; j < size; j++) {
		result[i][j] = "*";
	}
}

console.log(result);


