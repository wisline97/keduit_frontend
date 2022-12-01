/*
		인덱스를 (0~4) 를 랜덤저장하고 그 인덱보다 작은인덱스의 합을 출력
  	
		예) 2 를선택하면 2보다 작은 인덱스는 0, 1 이고,
			  array[0] 과 array[1] 의 값은 10,20 이다.
			  그합이므로 30이다.
		 	
		결과) 30
 */
var array = [10, 20, 30, 40, 50];

let idx = array.length
let num = parseInt(Math.random() * idx)

let total = 0

console.log("랜덤숫자는", num)

if (num == 0) {
	console.log(num, "보다 작은 인덱스는 없습니다.")
	console.log("다시 시작해주세요.")
} else {
	for (i = 0; i < num; i++) {
		total += array[i]
	}
	console.log(num, "보다 작은 인덱스들의 합은", total, "입니다")
}

