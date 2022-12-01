/*
	  
			[문제]
					12와 15의 공배수를 작은것부터 순서대로 5개만 출력 
	 */

let min = 12
let max = 15

let count = 0

for (i = 1; count < 5; i++) {
	if (i % min == 0 && i % max == 0) {
		count += 1
		console.log(i)
	}

}