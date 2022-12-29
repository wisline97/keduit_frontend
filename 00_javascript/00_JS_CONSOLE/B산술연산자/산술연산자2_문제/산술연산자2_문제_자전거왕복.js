/*
	[문제]
		철수는 자전거를 타고 2300 미터떨어진 학교에 갔다. 
		철수는 운동장을 세바퀴 더하기 한바퀴의절반을 돌고 집에왔다. 
		운동장 한바퀴는 283미터일때,
		철수는 오늘 몇미터를 다녀왔는지 구하시오.
		소수점 두자리까지 구하시오.
		
		[정답] 5590.50
 */

var homeToSchool = 2300;
var ground = 283;

var total = homeToSchool * 2 + ground * 3 + ground / 2;

console.log(total.toFixed(2));
