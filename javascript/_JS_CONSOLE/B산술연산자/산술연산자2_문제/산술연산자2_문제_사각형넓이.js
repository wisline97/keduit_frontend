/*
	[문제]
		가로가 7이고 세로가 7인 사각형 세개 더하기 한개의절반의 넓이를 구하시오. 
		소수점 두자리까지 구하시오. 
		[정답] 171.50
 */

var garo = 7;
var sero = 7;

var square = garo * sero;
answer = 3 * square + square / 2;
console.log(answer.toFixed(2));
