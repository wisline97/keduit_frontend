/*
		[문제]
		  8 과 12 의 최소 공배수를 구하시요
			 최소 공배수란 각 수의 배수를 나열한다음 처음으로 같은숫자를 말한다.
			 예) 8 16 24... 
			 예) 12 24....
			 여기서 24가 최소공배수이다.
	*/

let min = 8
let max = 12

let count = 0

for (i = 1; count < 1; i++) {
	if (i % min == 0 && i % max == 0) {
		count += 1
		console.log(i)
	}

}