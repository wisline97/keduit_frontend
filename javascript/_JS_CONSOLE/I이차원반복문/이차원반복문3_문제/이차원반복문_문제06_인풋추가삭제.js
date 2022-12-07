
/*
	1) arr 배열은 사이즈가 3이다.		
	2) valueList 배열 안의 값들은  추가와 삭제를 반복할 값들이다.		
	3) "추가" 는 순서대로 값을 저장한다.
	4) "삭제" 는 뒤에서부터 앞으로 밀어내고 맨뒤에 0으로 표시 한다. 	
	5) 중복된값은 "추가" 할수없고 , 없는값은 "삭제"할수없다.
	6) 없는 값은 삭제할수없고 "삭제불가" 출력
	7) 중복 된 값은 추가할수없고 "중복" 출력 
	[예시]
	 10 ==>  추가 ==> arr = [10,0,0];
	 20 ==>  삭제 ==> 20은 없으므로 ==> "삭제불가"
	 30 ==>  추가 ==> arr = [10,30,0];
	 10 ==>  삭제 ==> arr = [30,0,0];
	 30 ==>  추가 ==> 30 은 이미 저장되어서 ==> "중복"
	 30 ==>  삭제 ==> arr = [0,0,0];
	 */

var arr = [0, 0, 0];
var keyword = ["추가", "삭제", "추가", "삭제", "추가", "삭제"];
var valueList = [10, 20, 30, 10, 30, 30];
var idx = 0
var check = false
var deleteIdx = NaN

for (i = 0; i < keyword.length; i++) {
	var check = false
	deleteIdx = NaN
	if (keyword[i] == "삭제") {
		for (y = 0; y < arr.length; y++) {
			if (valueList[i] == arr[y]) {
				check = true
				deleteIdx = y
				break
			}
		}
		if (check == false) {
			console.log("배열 안에", valueList[i], "값이 존재하지 않습니다.(삭제불가)")
		}
		if (check == true) {
			arr[deleteIdx] = arr[deleteIdx + 1]
			arr[deleteIdx + 1] = 0
		}
	}
	if (keyword[i] == "추가") {
		console.log(valueList[i])
		for (j = 0; j < arr.length; j++) {
			if (arr[j] == valueList[i]) {
				console.log(valueList[i], "값은 이미 저장되어 있습니다.(중복)")
				check = true
			}
		}
		if (check == false) {
			arr[idx] = valueList[i]
			idx += 1
		}
		if (idx == 3) {
			break
		}
	}
	console.log(arr)
	console.log("=====================================")
}

