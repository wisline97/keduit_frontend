/*
	[문제]  
	 	철수는 일정한 빠르기로 운동장을 25바퀴도는데 
	 	1시간 15분 20초 걸렸습니다. 		 
	  	67바퀴를 도는데는 걸리는시간을 초로 출력하시오.
	  	소수점 두자리까지 구하시오. 
	  	
	[정답] 
		12113.60
 */

let chulsuTime = 3600 * 1 + 15 * 60 + 20;
let chulsuSecond = chulsuTime / 25;

let answer = chulsuSecond * 67;

console.log(answer.toFixed(2), "초");
