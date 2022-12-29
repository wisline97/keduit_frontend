/*
	
	아래배열 3개는 학생 점수 데이터 이다 
	이름 한줄로 저장하시오.
	[예시]
		data = [1001,"김철수",32,1002,"이만수",54,1003,"조영민",12];
 */

var number = [1001, 1002, 1003];
var userName = ["김철수", "이만수", "조영민"];
var score = [32, 54, 12];

var data = [];
var dataIdx = 0;

// a = number
// b = name
// c = score
function oneLine(a, b, c) {
	var idx = 0;
	while (true) {
		data[dataIdx] = a[idx]
		dataIdx += 1
		data[dataIdx] = b[idx]
		dataIdx += 1
		data[dataIdx] = c[idx]
		idx += 1

		if (idx == a.length) {
			break
		}
	}
	console.log(data)
}

oneLine(number, userName, score)



