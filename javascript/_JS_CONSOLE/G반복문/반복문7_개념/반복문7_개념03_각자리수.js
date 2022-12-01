/*
	 * [문제]
		 [1] 10000~99999 사이의 랜덤숫자를 저장하고 각자리별숫자가 5이상인 개수를 출력
		 
		 예) 19200 ==> 9 하나만 5이상 ==> 1
		 예) 98436 ==> 9,8,6, 세개가 5이상 ==> 3
	 */

let num = parseInt(Math.random() * 90000) + 10000

let num1 = num % 10
let num10 = parseInt(num % 100 / 10)
let num100 = parseInt(num % 1000 / 100)
let num1000 = parseInt(num % 10000 / 1000)
let num10000 = parseInt(num / 10000)

console.log(num)
console.log(num10000, num1000, num100, num10, num1)

let count = 0
while (true) {
	if (num1 >= 5) {
		count += 1
	}
	if (num10 >= 5) {
		count += 1
	}
	if (num100 >= 5) {
		count += 1
	}
	if (num1000 >= 5) {
		count += 1
	}
	if (num10000 >= 5) {
		count += 1
	}
	break
}

console.log(count, "개")