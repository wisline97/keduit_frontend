/*
	[문제]
		민수는 마라톤을하면서 2시간 3분 동안 13828m 를 달렸다.
	   	3분동안 간거리는 얼마인지 구하시오.
	   	소수점 두자리까지 구하시오.
	   	
	   	[정답] 337.27
 */

var time = 60 * 2 + 3;
var meter = 13828;

var ms = meter / time;

var threeminute = 3 * ms;

console.log("민수가 3분동안 간 거리는", threeminute.toFixed(2), "m");
