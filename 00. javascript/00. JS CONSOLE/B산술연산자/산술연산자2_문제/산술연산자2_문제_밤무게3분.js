/*
	[문제]
		철수가 1시간 40분동안 일정한 빠르기로 주은 밤의 무게가 11kg 이다.
		3분동안 주은밤은 몇 kg 인지 구하시오.
		소수점 두자리까지 구하시오.
		
	[정답] 
		0.33
 */

var time = 60 * 1 + 40;
var bam = 11;

var ms = bam / time;
var threeMinute = 3 * ms;

console.log("철수가 1분 동안 주은 밤은", threeMinute.toFixed(2), "kg");
