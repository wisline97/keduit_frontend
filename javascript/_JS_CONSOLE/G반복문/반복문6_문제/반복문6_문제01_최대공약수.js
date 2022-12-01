/*
		[문제] 
			45와 60 , 75의 최대공약수를 구하시오.
	 */

let num1 = 45
let num2 = 60
let num3 = 75
let 최대공약수 = 0
for (i = 1; i <= num3; i++) {
	if (num1 % i == 0 && num2 % i == 0 && num3 % i == 0) {
		if (최대공약수 < i)
			최대공약수 = i
	}
}
console.log(최대공약수)