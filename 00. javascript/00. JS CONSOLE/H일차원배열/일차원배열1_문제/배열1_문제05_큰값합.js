/*
	  value 에 숫자를 한개를 입력받고 arr 배열에서 value 보다 큰숫자의합을 출력 
 	
	  예) 30 을 입력받으면 30보다 큰값은 40과 50 이다. 	
	  그합은 90이다. 	
	  결과)90

*/
var arr = [10, 20, 30, 40, 50];
let value = parseInt(Math.random() * 41) + 10
let idx = arr.length
let total = 0
console.log("랜덤숫자는", value)
for (i = 0; i < idx; i++) {
	if (arr[i] > value) {
		total += arr[i]
		console.log(arr[i])
	}
}
console.log("랜덤숫자보다 큰 배열의 숫자들의 합은", total)