/*
	아래는 학생과 점수 데이터이다.
	시험점수는 60점이상 합격이다.
	
	합격한 사람  점수를 문자열에 저장해서 출력하시오.
	단, 데이터구분자는 , (콤마)를 중간에 삽입한다.
	92점과 63점이 합격이므로

	var 합격 = "92,63";
*/
var scoreList = [12, 92, 54, 63];
var 합격 = "";

for (var i = 0; i < scoreList.length; i++) {
	if (scoreList[i] >= 60) {
		합격 += scoreList[i];
		합격 += ",";
	}
}
합격 = 합격.substring(0, 합격.length - 1); // 마자믹 , 를 삭제한다. 
console.log(합격);

