/*
	[문제] 
		철수네 반은 학생이 40명이다.
	 	철수와 , 영희 와 , 민수 이는 반장선거에 나갔다.
	 	민수는 득표를 40% 를 획득했고, 
	 	영희는 9표를 얻었다.
	 	나머지는 철수가 득표를 했다.
	 	철수의 득표를 구하시오.
	 	 
	 [정답]
	 	15
 */

let total = 40;

let minsu = (40 / 100) * 40;
let younghee = 9;
let chulsu = total - minsu - younghee;

console.log("철수의 득표는", chulsu, "표");
