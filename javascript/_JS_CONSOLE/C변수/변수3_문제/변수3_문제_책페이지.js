/*
	[문제] 
		철수는 동화책을 읽고있다. 
		동화책의 총페이지수는 132페이지이다.
		현재 철수는 26퍼센트를 읽었다. 
		현제 페이지를 구하시오.
		소수점 두자리까지 구하시오.

	[정답] 
		34.32
		
 */

let total = 132;
let percent = total / 100;

let answer = percent * 26;

console.log(answer, "페이지");
