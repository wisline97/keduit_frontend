/*
		[문제] 
			45와 60 , 75의 최소공배수를 구하시오.
	 */

let num1 = 45
let num2 = 60
let num3 = 75
let 최소공배수 = 0
for (i = 1; true; i++) {
	if (i % num1 == 0 && i % num2 == 0 && i % num3 == 0) {
		if (최소공배수 < i) {
			최소공배수 = i
			break
		}
	}
}
console.log(최소공배수)