
/*
[문제1]
	 아래 4 * 3 이차원배열에 랜덤값 1~100을 12개 저장후 출력
	
	위에서 저장한 배열의 가장작은값과 인덱스 위치를 출력 
*/

var arr = [[], [], [], []];


// 이차원 배열에 랜덤값 저장하는 반복문
for (i = 0; i < arr.length; i++) {
	for (j = 0; j < 3; j++) {
		var num = parseInt(Math.random() * 100) + 1
		arr[i][j] = num
	}
	console.log(arr[i])
}

// 이차원 배열의 최소값, 최대값 도출해내는 반복문
var min = 100
var max = 1

for (i = 0; i < arr.length; i++) {
	for (j = 0; j < 3; j++) {
		if (arr[i][j] > max) {
			max = arr[i][j]
		}
	}
	for (j = 0; j < 3; j++) {
		if (arr[i][j] < min) {
			min = arr[i][j]
		}
	}
}

console.log("최소값:", min, "최대값:", max)

// 이차원 배열의 최소값, 최대값 인덱스 도출해내는 반복문
for (i = 0; i < arr.length; i++) {
	for (j = 0; j < 3; j++) {
		if (arr[i][j] == min) {
			console.log("최소값 인덱스:", i, ",", j)
		}
	}
	for (j = 0; j < 3; j++) {
		if (arr[i][j] == max) {
			console.log("최대값 인덱스:", i, ",", j)
		}
	}
}




