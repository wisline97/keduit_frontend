/*
	[문제] 
		123123초 는 몇시간 몇분 몇초인가 ?			
		
	[정답] 
		34 , 12 , 3
*/

let total = 123123;

let hours = Math.floor(total / 3600);
let minutes = Math.floor((total % 3600) / 60);
let seconds = total % 60;

console.log(hours, "시간", minutes, "분", seconds, "초");
