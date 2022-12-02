/*
	[문제]
		아래배열에 랜덤으로 0~9사이의 숫자를 각각 저장한다. 
		한배열의 각각의 값들중 홀수만 전부모아서 하나의 숫자로표현 하시오.

		
	(예) 
		[1,5,4,4,0]  ==> 에서 홀수만 모으면 15 
	(예) 
		  [9,2,1,0,7]  ==> 에서 홀수만모으면 917 
		
 */
var num = 0
var arr = [];

for (i = 0; i < 5; i++) {
	num = parseInt(Math.random() * 10)
	arr[i] = num
}
console.log(arr)
var str = ""

for (i = 0; i < 5; i++) {
	if (arr[i] % 2 == 1) {
		str += arr[i]
	}
}

console.log(str)