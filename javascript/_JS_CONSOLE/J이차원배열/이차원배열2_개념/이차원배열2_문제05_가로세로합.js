/*
		var arr = [
				[101, 102, 103, 104],
				[201, 202, 203, 204],
				[301, 302, 303, 304]]; 

		var garo = [];
		var sero = [];
			
		// 문제 1) 가로 합 을 garo 배열에 저장
		// 정답 1) 410, 810, 1210
			
		// 문제 2) 세로 합 을 sero 배열에 저장 
		// 정답 2) 603, 606, 609, 612
		*/
var arr = [
	[101, 102, 103, 104],
	[201, 202, 203, 204],
	[301, 302, 303, 304]];

var garo = [];
var garoIdx = 0
var sero = [];
var seroIdx = 0

//가로 합 구하기
for (i = 0; i < arr.length; i++) {
	var total = 0
	for (j = 0; j < arr[i].length; j++) {
		total += arr[i][j]
	}
	garo[garoIdx] = total
	garoIdx += 1
}

console.log("가로 합:", garo)



//세로 합 구하기
for (i = 0; i < arr[1].length; i++) {
	var total = 0
	for (j = 0; j < arr.length; j++) {
		total += arr[j][i]
	}
	sero[seroIdx] = total
	seroIdx += 1
}

console.log("세로 합:", sero)