/* 
		  [자리별홀수개수]
		  1 ~ 10000 사이의 숫자를 입력받고 
		  자리별 홀수의 개수를 출력하시오.
		  
		  예) 
			 561  ==> 2개
				 1    ==> 1개
				 668  ==> 0개
				 9999 ==> 4개
	 
	 */

var num = parseInt(Math.random() * 10000) + 1
console.log(num)
/* 
10 % 로 나온 값을 기준으로 count 세기

num = 764

num%10 = 3
num = num//10 = 76


num%10 = 6
num = num//10 = 7

num%10 = 7
num = num//10 = 0

num == 0 되면
break
*/

var count = 0

while (true) {
	var odd = num % 10
	if (odd % 2 == 1) {
		count += 1
	}
	num = parseInt(num / 10)
	if (num == 0) {
		break
	}
}
console.log(count)


/* 
var num1 = num >= 10 ? num % 10 : num
var num10 = num >= 10 ? parseInt((num % 100) / 10) : undefined
var num100 = num >= 100 ? parseInt((num % 1000) / 100) : undefined
var num1000 = num >= 1000 ? parseInt((num % 10000) / 1000) : undefined
var num10000 = num >= 10000 ? parseInt(num / 10000) : undefined

var count = [num10000, num1000, num100, num10, num1]

console.log(num)
console.log(count)
var odd = 0
for (i = 0; i < count.length; i++) {
	if (count[i] != undefined && count[i] % 2 != 0) {
		odd += 1
		console.log(i)
	}
}
console.log(odd, "개")
*/