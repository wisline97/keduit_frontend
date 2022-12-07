
/*
	아래 arr 배열에 랜덤으로 1~4를 5개 저장후 출력한다.
	그뒤에 test 배열에는 arr 배열중에서 혼자있는 값만 제외하고 복사한다.
	단, 앞에서부터 저장한다. 
			 
	[예시]
		arr = [1,2,3,2,1]  ==>  test = [1,2,2,1,0]    // 3이 혼자있음
		arr = [1,3,4,4,2]  ==>  test = [4,4,0,0,0]    // 1,3,2 혼자있음
		arr = [1,1,1,1,1]  ==>  test = [1,1,1,1,1]    // 없음

*/
var arr = [0, 0, 0, 0, 0];
var test = [0, 0, 0, 0, 0];
var idx = 0

for (i = 0; i < arr.length; i++) {
	var num = parseInt(Math.random() * 4) + 1
	arr[i] = num
}

for (i = 0; i < arr.length; i++) {
	var count = 0
	for (j = 0; j < arr.length; j++) {
		if (arr[i] == arr[j]) {
			count += 1
		}
	}
	if (count > 1) {
		test[idx] = arr[i]
		idx += 1
	}
}
console.log(arr)
console.log(test)