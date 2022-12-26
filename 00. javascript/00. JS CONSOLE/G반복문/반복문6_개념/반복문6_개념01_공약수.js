/*
	[문제]
		90 과 45의 공약수를 구하시오.
 */

let max1 = 90
let max2 = 45
/* 
console.log("90의 약수 입니다")
for (i = 1; i <= max1; i++) {
	if (max1 % i == 0) {
		console.log(i)
	}
}
console.log("=============================")
console.log("45의 약수 입니다")
for (i = 1; i <= max2; i++) {
	if (max2 % i == 0) {
		console.log(i)
	}
}
 */
console.log("=============================")
console.log("90과 45의 공약수 입니다")
for (i = 1; i <= max1; i++) {
	if (max2 % i == 0 && max1 % i == 0) {
		console.log(i)
	}
}