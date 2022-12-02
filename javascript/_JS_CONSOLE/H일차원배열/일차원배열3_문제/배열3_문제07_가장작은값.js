/*
[문제]
	array 배열에 -100~100사이의 랜덤값중 홀수만 5개 저장한다. 
		그중 가장작은값의 인덱스와 값을 출력한다. 

	 
*/

let num = 0
let i = 0
let arr = []
while (true) {
	num = parseInt(Math.random() * 201) - 100
	if (num % 2 == 1 || num % 2 == -1) {
		arr[i] = num
		i += 1
	}
	if (i == 5) {
		break
	}
}

console.log(arr)

let min = 100
let minIdx = 0
let idx = arr.length

for (i = 0; i < idx; i++) {
	if (min > arr[i]) {
		min = arr[i]
		minIdx = i
	}
}

console.log("배열에서 가장 작은 숫자는", minIdx + 1, "번째 숫자인", min, "이다")