/*
	[설명]
		철수는 고속버스를 타고 여행을 떠나려한다.
		출발시간까지 1시간 여유가 있다.
		고속버스역과 상점을 시속 3km 로 걸어서 왕복을하고,
		10분동안 물건을 쇼핑할려고한다.
		역에서  1.3km 떨어진 상점을 다녀올수있을까요?
	[문제]
		위식을 표현하고, 풀이과정을 주석으로 작성하시오.
*/

/* 
여유시간 = 1시간(60분)
역과 상점 거리 = 1.3km
철수 걸음 분속 = 0.05km
철수 걸음으로 역에서 상점으로 갈 때 걸리는 시간 = 1.3 / 0.05 (26분)

*/
let freetime = 60;
let shopingTime = 10;
let walkTimePerM = 3 / 60;
let shopToStation = 1.3;

console.log(shopingTime + 2 * (shopToStation / walkTimePerM) <= 60);
