/*
  	[문제]
	   철수는 놀이공원에 갔습니다. 
	   놀이공원 입장료는 15000원 입니다.
	   철수는 이런저런 할인을 받아서 9000원에 입장했습니다.
	   몇퍼센트 할인받은것인지구하시오.
	   
	[정답] 
		40
 */

let total = 15000;

let chulsu = 9000;

let discount = 15000 - 9000;
let percent = (100 / 15000) * discount;

console.log(percent, "% 할인받음");
