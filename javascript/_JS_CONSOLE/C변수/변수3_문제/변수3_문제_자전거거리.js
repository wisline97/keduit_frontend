/*
	[문제]
	 	철수는 자전거를 타고 일정한 빠르기로 2시간동안 37876m 를 갔습니다.
	 	철수가 자전거를 타고 30초동안 간 거리는 를 구하시오.
	 	소수점 두자리까지 구하시오. 
	 	
	[정답] 
		157.82
 */

let time = 3600 * 2;
let second = 37876 / time;

let answer = second * 30;

console.log(answer.toFixed(2), "m");
