/*
	키워드의 명령어 순서대로 수행할려고한다.
	삭제는 indexList 의 값위치까지 맨뒤에서 부터 한칸씩 앞으로 전진하고,
	맨뒤는 0을 저장한다. 
	
	삽입은 indexList 위치에 value 값 100을 저장하고 그뒤에값들은 한칸씩 뒤로
	밀어낸다

	[예시]
		[1] keyword = 삭제, indexList = 2,
			결과 : arr = [10,20,40,50,0]
		[2] keyword = 삽입, indexList = 1,
			결과 : arr = [10,100,20,40,50]
		[3] keyword = 삭제, indexList = 3
			결과 : arr = [10,100,20,50,0]
		[4] keyword = 삽입, indexList = 3
			결과 : arr = [10,100,20,100,50]
*/
var arr = [10, 20, 30, 40, 50];

var keyword = ["삭제", "삽입", "삭제", "삽입"];
var indexList = [2, 1, 3, 3];
var value = 100;
var end = arr.length - 1

for (i = 0; i < indexList.length; i++) {
	var idx = indexList[i]
	if (keyword[i] == "삭제") {
		end = arr.length - 1
		for (j = idx; j < end; j++) {
			arr[j] = arr[j + 1]
			arr[j + 1] = arr[j + 2]
		}
		arr[end] = 0
		end -= 1
		console.log(arr)
	}
	if (keyword[i] == "삽입") {
		end = arr.length - 1
		for (y = idx; y < end; y++) {
			arr[end] = arr[end - 1]
			end -= 1
		}
		arr[idx + 1] = arr[idx]
		arr[idx] = 100
		console.log(arr)
	}
}

