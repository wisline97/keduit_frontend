
/*
	 [문제1] array 배열에 1~100점 사이의 랜덤 정수를 5개 저장하고 출력
	 예)    87, 11, 92, 14, 47
	
	 [문제2] 전교생의 총점과 평균 출력
	 예)    총점(251) 평균(50.2)
	
	 [문제3] 성적이 60점 이상이면 합격. 합격생 수 출력
	 예)   2명
 */

var array = [];
let num = 0

for (i = 0; i < 5; i++) {
	num = parseInt(Math.random() * 100) + 1
	array[i] = num
}

console.log(array)

let idx = array.length
let total = 0

for (i = 0; i < idx; i++) {
	total += array[i]
}

console.log("전교생의 총점은", total)
console.log("전교생의 평균은", total / idx)

let count = 0
for (i = 0; i < idx; i++) {
	if (array[i] >= 60) {
		count += 1
	}
}

console.log("전교생 중 합격생의 수는", count)