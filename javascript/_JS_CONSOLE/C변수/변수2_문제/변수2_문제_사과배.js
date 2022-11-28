/*
	[문제]
		사과 8개의 무게는 1056g 입니다.
		배한개는 사과한개의 117% 의 무게를 갖고있습니다.
		사과 5개 배 7개를 구입하였습니다. 
		과일전체의 총무게를 구하시오. 
		소수점 두자리까지 구하시오.
		
	[정답]
		1741.08
 */

let apple = 1056 / 8;
let pear = apple * 1.17;

let total = apple * 5 + pear * 7;

console.log(total.toFixed(2), "g");
