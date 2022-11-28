/*
	[문제]
		사과 15개의 무게를 재었더니 25.8kg 이 었습니다. 	 	
	 	사과 세개 더하기 한개의절반 의 무게를 구하시오.
	 	소수점 두자리까지 구하시오.
	 	
	 [정답] 
	 	6.02 kg
 */

var apple = 2580 / 15;
console.log("사과 1개의 무게는", apple / 100, "kg");
console.log("사과 15개의 무게는", (apple / 100) * 15, "kg");
var answer = (apple * 3.5) / 100;
console.log(answer, "kg");
