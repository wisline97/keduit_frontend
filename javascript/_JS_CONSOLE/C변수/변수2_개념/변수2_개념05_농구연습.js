/*
	[문제1]
		철수가 농구연습을 하고있다.
		12번을 슛시도를 했다.
		슛한번의 퍼센트는 얼마인지구하시오.
		소수점 두자리까지 구하시오.
		
	[문제2]
		12번의 슛이 100퍼센트라고 했을때, 1퍼센트는 슛몇번인지 구하시오.
		소수점 두자리까지 구하시오.
*/

let shootTry = 12;
let oneShootTry = (100 / 12) * 1;

console.log("[1]", oneShootTry.toFixed(2), "%");

let onePercentShoot = (12 / 100) * 1;
console.log("[2]", onePercentShoot.toFixed(2), "번");
