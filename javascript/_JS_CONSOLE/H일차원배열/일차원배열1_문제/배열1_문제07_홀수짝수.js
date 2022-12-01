/*
	  숫자를 하나랜덤으로저장(1~10) 그숫자가 짝수면 ==> 배열에서 짞수만 출력
	  그숫자가 홀수면 배열에서 홀수만 출력 

 	
*/
var arr = [10, 20, 31, 24, 98, 65, 43, 73, 51, 22];
let num = parseInt(Math.random() * 10) + 1
let idx = arr.length

console.log("랜덤넘버", num)

if (num % 2 == 0) {
	console.log("랜덤숫자가 짝수입니다.")
	console.log("배열 안의 짝수들만 출력합니다.")
	for (i = 0; i < idx; i++) {
		if (arr[i] % 2 == 0) {
			console.log(arr[i])
		}
	}


}
else {
	console.log("랜덤숫자가 홀수입니다.")
	console.log("배열 안의 홀수들만 출력합니다.")
	for (i = 0; i < idx; i++) {
		if (arr[i] % 2 != 0) {
			console.log(arr[i])
		}
	}
}