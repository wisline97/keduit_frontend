/*	
 	[문제]
		철수네 반 학생은 31명입니다.
	   	이중에서 남학생은 3명, 
	    여학생은 남학생의 3배의 학생이 봉사할동을 하였습니다.
	   	철수네 반에서 봉사활동을 하지않은 학생과 
	    봉사활동 한 학생의 차이는 얼마인지 구하시오.
	    
	[정답] 
		7
*/

let total = 31;

let volunteerBoy = 3;
let volunteerGirl = volunteerBoy * 3;

let volunteer = volunteerBoy + volunteerGirl;
let nonvolunteer = total - volunteer;
const answer = nonvolunteer - volunteer;

console.log(answer, "명 차이");
