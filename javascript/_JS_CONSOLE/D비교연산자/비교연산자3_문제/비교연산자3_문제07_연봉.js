/*
		[설명]
			작년 연봉은 970 원이다 올해는 11 프로 인상이 되었다. 
		  	올해 우리 회사 평균 월급은 91 원이다. 
		  	올해의  내연봉이 올해의 우리회사 평균 연봉 보다 큽니까?

	
		[문제]
			위식을 표현하고, 풀이과정을 주석으로 작성하시오.
	 */

let lastYear = 970;
let thisYear = lastYear + lastYear * 0.11;
let average = 91 * 12;

console.log(thisYear > average);
