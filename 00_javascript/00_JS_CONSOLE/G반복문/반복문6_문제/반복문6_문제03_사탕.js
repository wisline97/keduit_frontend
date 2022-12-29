/*
		[문제] 
			사탕 62개와 초콜릿 88개를 각각 남김없이 똑같이 최대한 
			많은 학생에게 나눠줄려고 할때,  학생수를 구하시오.
			단, 사탕은 2개가 남고 초콜릿은 4개가남는다.
	 */

let num1 = 62
let num2 = 88

let answer = 0
for (i = 1; i <= num2; i++) {
	if (num1 % i == 2 && num2 % i == 4) {

		if (answer < i) {
			answer = i
			break
		}
	}
}

console.log(answer, "명")