/*
	[문제]
  		민수는 키가 184cm이고,
  		철수는 키가 165cm이고,
  		영희는 키가 160cm이다.
  		세학생의 키의 평균에서 키가 가장작은 학생의 차이를 구하시오.
  		수소점 두자리까지 구하시오.
		
		[정답] 9.67
 */

var minsu = 184;
var chulsu = 165;
var younghee = 160;

var average = (minsu + chulsu + younghee) / 3;

var diff = average - younghee;

console.log(diff.toFixed(2));
