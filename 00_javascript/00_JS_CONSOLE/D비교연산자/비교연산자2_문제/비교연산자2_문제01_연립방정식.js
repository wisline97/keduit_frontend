/*
	[문제]
		아래 연립방정식을 풀이하는 주석을 작성하시오.
*/
/* 
-4 + a + 3 == 8 && (a + b) % 2 == 1

a - 1 = 8
a = 9

(a + b)% 2 == 1
(9 + b)%2 == 1
b는 2의 배수 혹은 짝수
*/

var a = 9;
var b = 2;
console.log(-4 + a + 3 == 8);
console.log((a + b) % 2 == 1);
