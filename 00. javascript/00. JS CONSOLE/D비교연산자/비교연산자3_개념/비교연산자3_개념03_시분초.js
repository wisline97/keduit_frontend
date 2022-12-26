/*
	[설명] 
		321321초를  "시간" , "분" , "초" 로 표현하고,		
		분이 홀수이면 true 아니면 false를 출력.
	[문제]
		위식을 표현하고, 풀이과정을 주석으로 작성하시오.
*/
let total = 321321;
let hour = total / 3600;
let minute = (total % 3600) / 60;
let second = total % 60;

console.log(
  Math.floor(hour),
  "시간",
  Math.floor(minute),
  "분",
  Math.floor(second),
  "초"
);

console.log(Math.floor(minute) % 2 == 1);
