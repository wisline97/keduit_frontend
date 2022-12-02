/*
	[문제]
		아래 배열의 랜덤값 -100 ~ 100 사이의 랜덤값을 4개 저장한다.
		배열의 랜덤값이 모두 짝수면 true 출력하고,
		하나라도 짝수가 아니면 false를 출력한다.
		단, 0은 짝수이다.
	
 */
let num = 0
let i = 0
let arr = []
while (true) {
	num = parseInt(Math.random() * 201) - 100
	arr[i] = num
	i += 1
	if (i == 4) {
		break
	}
}

console.log(arr)


let idx = arr.length
let check = true

for (i = 0; i < idx; i++) {
	if (arr[i] % 2 != 0) {
		check = false
	}
}

console.log(check)