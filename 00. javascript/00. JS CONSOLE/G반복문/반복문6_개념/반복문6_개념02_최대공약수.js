/*
	[문제]
		90 과 45의 최대공약수를 구하시오.
 */


let max1 = 90
let max2 = 45
let 최대공약수 = 0

for (i = 1; i <= max1; i++) {
	if (max2 % i == 0 && max1 % i == 0) {
		if (최대공약수 < i) {
			최대공약수 = i
		}
	}
}
console.log("90과 45의 최대공약수는")
console.log(최대공약수, "입니다")