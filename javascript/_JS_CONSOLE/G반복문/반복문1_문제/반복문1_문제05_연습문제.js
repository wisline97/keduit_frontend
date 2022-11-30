/*
	[문제]
		5~15 사이를 전부출력한다.
		반복문 종료후 5의배수의 합을 저장후 출력한다.
 */

let min = 5
let max = 15
let total = 0
while(min <= 15){
	console.log(min)
	if (min % 5 == 0){
		total += min
	}
	min += 1
}

console.log("5의배수의 총 합은",total)