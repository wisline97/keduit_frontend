/*
	[문제]
		사과 4개의 무게는 32g 이다. 
		사과 3개의 무게는 얼마인지 구하시오.
			
	[정답] 
		24
 */

let appleCount = 4;
let appleWeight = 32;
let apple = appleWeight / appleCount;

console.log(3 * apple, "g");
