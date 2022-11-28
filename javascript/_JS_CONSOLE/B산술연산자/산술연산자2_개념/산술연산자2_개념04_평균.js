/*
	[문제]
		총 3과목의 시험을 보았다.
	  	국어는 84 점 수학 23점 과학은 53 점을 받았다.
	  	평균을 구하시오. 
	  	소수점 두자리까지 구하시오. 
	  	
	[정답] 
		53.33
*/

let korean = 84;
let math = 23;
let science = 53;

let average = (korean + math + science) / 3;

console.log(average.toFixed(2), "점");
