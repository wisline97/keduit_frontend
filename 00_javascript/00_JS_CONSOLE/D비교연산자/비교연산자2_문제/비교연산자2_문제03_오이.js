/*
	[설명] 
		현금 20000원을 가지고 
		마트에가서 오이를 9개구매했더니,
		거스름돈이 2000원이다.
	[문제]
		위 식을 표현하고, 풀이과정을 주석으로 작성하시오.

*/

let total = 20000;
let rest = 2000;
let $52 = 2000;

/* 
20000 - 9a = 2000
-9a = -18000
a = 2000
*/

console.log(total - 9 * $52 == 2000);
