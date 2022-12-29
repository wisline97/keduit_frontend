/*
	[문제]
		철수 반학생은 16명이다.
		8명은 양로원에 봉사활동을 다녀왔고,
		4명은 지하철 봉사활동을 다녀왔다. 
		봉사활동을 다녀오지않은 
		학생의 비율은 몇퍼센트인지 구하시오.
		소수점 두자리까지 구하시오. 
		
	[정답] 
		25.00
 */

let total = 16;

let volunteer = 8 + 4;

let nonvolunteer = total - volunteer;

let answer = (100 / 16) * nonvolunteer;

console.log(answer.toFixed(2), "%");
