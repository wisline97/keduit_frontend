/*
	[문제]
		[1] r 에 랜덤숫자 1~10을저장하고  
		[2] r 짝수면 result 에 true를 저장
		[3] r 홀수면 result 에 false를 저장 
		
 */

r = Math.floor(Math.random() * 10 + 1);

result = r % 2 == 0 ? true : false;

console.log(r, result);
