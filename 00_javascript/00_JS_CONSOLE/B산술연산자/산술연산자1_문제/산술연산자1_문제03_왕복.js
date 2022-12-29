/*
	[문제]	  	
		철수는 집에서 학원에 들려서 학교운동장까지 걸어갔다가 돌아왔다.
  		집에서 학원까지의 거리는 300m 이고,
  		학원에서 학교운동장까지의 거리는 821m 이다. 
  		철수가 왕복한 거리는 얼마인지 구하시오.
	[정답] 
		2242
*/

var homeToLesson = 300;
var lessonToSchool = 821;

var total = 2 * (homeToLesson + lessonToSchool);

console.log("철수가 왕복한 거리는:", total, "m");
