/*
	  아래 배열에 랜덤값 -100 ~ 100을 4개 저장후 그값중 홀수만 출력 
 	
	  예) arr = [-11, 4, 73, -2 ];
	  결과) -11 , 73

*/
var arr = [];
let num = 0

for (i = 0; i < 4; i++) {
	num = parseInt(Math.random() * 201) - 100
	arr[i] = num
}

console.log(arr)

for (i = 0; i < arr.length; i++) {
	if (arr[i] % 2 == 1 || arr[i] % 2 == -1) {
		console.log(arr[i])
	}
}