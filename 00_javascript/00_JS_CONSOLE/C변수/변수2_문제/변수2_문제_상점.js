/*
	[문제]
		상점에 과일이 250개가 있다.
		그중에 오전에 84퍼센트가 팔렸고, 
		전체를 기준으로 나머지 16퍼센트는 오후에 다팔렸다.
		오전에 팔린개수 에서 오후에 팔린개수의 차이는 얼마인지 구하시오.
	[정답]
		170
 */

let total = 250;
let morning = (250 / 100) * 84;
let afternoon = (250 / 100) * 16;

let diff = morning - afternoon;

console.log(diff, "개 차이");
