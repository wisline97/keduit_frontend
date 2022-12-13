/*
	 1) userData 는 학생 번호 데이터이다
	 2) scoreData 는 학생 점수 데이터이다.
	  
	[문제] 1등 번호 와 점수출력  
	   예) 1003 : 43
	   
	[문제] 전체 평균 출력
	   예) (10 + 21 + 43 + 12) / 4.0
 */

var userData = "1001,1002,1003,1004";
var scoreData = "10,21,43,12";

var userDataArr = userData.split(",")
var scoreDataArr = scoreData.split(",")

var $1st = [0, 0];
var total = 0
for (i = 0; i < userDataArr.length; i++) {
	if ($1st[1] < scoreDataArr[i]) {
		$1st[0] = userDataArr[i]
		$1st[1] = scoreDataArr[i]
	}
	total += parseInt(scoreDataArr[i])
}

var 평균 = total / 4

console.log($1st)
console.log(평균, "점")
