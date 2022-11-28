/*
	[문제]
   		철수네 반 학생은 30명입니다.
   		남학생은 16 명입니다.
   		이중에서 남학생은 3명 , 
   	 	여학생은 남학생의 3배의 학생이 봉사할동을 하였습니다.
    	봉사활동을 하지않은 여학생은 몇명인지 구하시오.
    	
    [정답] 
    	5
 */

let total = 30;
let boy = 16;
let girl = total - boy;

let volunteerBoy = 3;
let volunteerGirl = volunteerBoy * 3;

const answer = girl - volunteerGirl;

console.log(answer, "명");
