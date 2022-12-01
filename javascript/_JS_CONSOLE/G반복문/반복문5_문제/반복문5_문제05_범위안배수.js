/*
		[문제]
			8의 배수를 8부터 순차적으로 출력하는데 50에서 100사이의 배수만출력 
	 */

let num = 8

for (i = 1; i <= 100; i++) {
	if (num * i > 50 && num * i < 100) {
		console.log(num * i)
	}
}