
/*
[문제1]
	 아래 4 * 3 이차원배열에 랜덤값 1~100을 12개 저장후 출력
	위에서 저장한 배열의 값중 50이상인 값의 인덱스를 모두 출력

	
*/

var arr = [[], [], [], []];

for (var i = 0; i < 4; i++) {
	for (var j = 0; j < 3; j++) {
		arr[i][j] = parseInt(Math.random() * 100 + 1);
		if (arr[i][j] >= 50) {
			console.log(i + " " + j);
		}
	}
}
console.log(arr);




