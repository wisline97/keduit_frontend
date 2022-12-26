/*
	[설명] 
	  	자동차는 154키로미터의 거리를  1시간18분에 달린다.
	  	트럭은 215키로미터의 거리를 2시간17분에 달린다. 			
	  	자동차가 트럭보다 빠르나요? 
	[문제]
		위식을 표현하고, 풀이과정을 주석으로 작성하시오.
*/

/* 
자동차 분속 = 154 / 78
트럭 분속 = 215 / 137
*/

let car = 154 / 78;
let truck = 215 / 137;

console.log("자동차 시속", Math.floor(car * 60), "km/h");
console.log("트럭 시속", Math.floor(truck * 60), "km/h");

console.log(Math.floor(car * 60) > Math.floor(truck * 60));
