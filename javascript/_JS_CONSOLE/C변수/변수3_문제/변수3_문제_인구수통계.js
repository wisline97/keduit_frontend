/*
	[문제] 
	  	어느도시에 전체 인구가 400000 명이다. 
	    그중 나이가 19세 이하 인구는 35%이다.
	    그리고 나이가 40세 이상 인구는 25%이다.	      
	 	위도시의 19세이하인구에서  40세이상인구 수를 뺀 인구수를 구하시오.		 	 	
	[정답] 
		40000
 */

let total = 400000;
let percent = total / 100;

let teenager = percent * 35;
let midager = percent * 25;

let answer = teenager - midager;

console.log(answer, "명");
