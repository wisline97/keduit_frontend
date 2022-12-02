/*
	[문제]
		array 배열에 -100 ~ 100사이의 랜덤값을 저장후 
				가장큰값의 인덱스와 값을 출력한다
 */
var array = [];
let num = 0


for (i = 0; i < 5; i++) {
	num = parseInt(Math.random() * 201) - 100
	array[i] = num
}

console.log(array)

let max = 0
let maxIdx = 0
for (i = 0; i < 5; i++) {
	if (max < array[i]) {
		maxIdx = i
		max = array[i]
	}
}

console.log(max, maxIdx)