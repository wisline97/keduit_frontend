/*
	[문제] 
		철수는 동화책을 읽고있다. 
		동화책의 총페이지수는 128페이지이다.
		현재 동화책 72페이지까지 읽었다.
		지금까지 읽은 페이지는 전체중 몇퍼센트인지 구하시오.
		소수점 두자리까지 구하시오.	
		
	[정답] 
		43.75
 */

let total = 128;
let percent = 100 / total;

let answer = percent * 72;

console.log(answer, "%");
