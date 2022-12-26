
/*
	 [1] 배열 arr의 값들은 1과 0으로 되어있다.
	 [2] 숫자 1 은 이미 채워진 자리이고 0은 비어있는자리이다.
	 [3] count 변수에 랜덤으로 1~6의 숫자를 저장한다.
	 [4] count 의 값만큼 arr 배열에 연속으로 count숫자를 저장할려고한다.
		  [예시]
			(1) count = 3 ==> arr배열의 인덱스 2~4 까지 0으로 비어있으므로, 
				arr = [0,1,3,3,3,1,0,0] 
			(2) count = 4 ==> arr배열의 연속으로 4칸 비어있는자리가없다.
				"저장불가" 출력
			(3) count = 1 ==> arr배열의 인덱스 0이 비어있으므로,
				arr = [1,1,0,0,0,1,0,0]
*/

var arr = [0, 1, 0, 0, 0, 1, 0, 0];
var count = 0;
var idx = 0
for (i = 0; i < arr.length; i++) {
	count = 0;
	for (j = 0; idx < arr.length; j++) {
		if (arr[idx] == 0) {
			count += 1
			idx += 1
		}
		if (arr[idx + 1] == 1 || idx + 1 > 7) {
			break
		}
	}

	console.log(count)
}