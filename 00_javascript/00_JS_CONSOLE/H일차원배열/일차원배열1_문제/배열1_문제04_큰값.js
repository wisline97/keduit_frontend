/*

	  value 에 랜덤숫자(10~50)을 한개를 입력받고 arr 배열에서 value 보다 큰숫자만 출력 
 	
	  예) 30 을 입력받으면 30보다 큰값은 40과 50 이다. 	 	
	  결과) 40, 50
*/

var arr = [10, 20, 30, 40, 50];
let value = parseInt(Math.random() * 41) + 10
let idx = arr.length
console.log("랜덤숫자는", value)
for (i = 0; i < idx; i++) {
	if (arr[i] > value) {
		console.log(arr[i])
	}
}
