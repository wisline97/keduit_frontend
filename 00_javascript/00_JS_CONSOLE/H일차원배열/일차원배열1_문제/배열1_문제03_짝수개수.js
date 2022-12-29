/*
  index 에 랜덤숫자(0~9) 를 입력받고 arr 배열에서 index 
 보다 큰인덱스의 값들중 짝수의 합을 출력
	
	
	
*/

var arr = [10, 20, 31, 20, 98, 65, 43, 73, 51, 22];
let num = parseInt(Math.random() * 9)
let idx = arr.length
let total = 0
console.log(num)
for (i = 0; i < idx; i++) {
	if (i > num) {
		if (arr[i] % 2 == 0) {
			console.log(arr[i])
			total += arr[i]
		}
	}
}

console.log(total)