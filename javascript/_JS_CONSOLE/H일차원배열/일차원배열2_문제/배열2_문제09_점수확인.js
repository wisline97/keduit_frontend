/*
	 
	 [문제] 학번을 랜덤으로 입력받아 성적 출력
	 [정답] 학번 입력 : 1003 성적 : 45점
 */
numberList = [1001, 1002, 1003, 1004, 1005];
scoreList = [87, 11, 45, 98, 23];

let num = parseInt(Math.random() * 5)

console.log(numberList[num], "번 학생의 성적은", scoreList[num], "점")