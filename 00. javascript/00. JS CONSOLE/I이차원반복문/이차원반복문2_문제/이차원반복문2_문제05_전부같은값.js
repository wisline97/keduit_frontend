/*
	[문제]
		arr1 과 arr2 각각의 값들이 모두 같은지 검사하시오.
		전부 같으면 true, 틀린 값이 하나라도 있으면 false를 출력하시오.
		단, 위치는 달라도 상관없다. 
	[정답]
		true	
 */
var arr1 = [1, 2, 3, 1, 2, 3];
var arr2 = [3, 2, 1, 2, 3, 1];
var check = true
var count = arr1.length

for (i = 0; i < arr1.length; i++) {
	for (j = 0; j < arr2.length; j++) {
		if (arr1[i] == arr2[j]) {
			count -= 1
			break
		}
	}
}

if (count == 0) {
	console.log(true)
} else {
	console.log(false)
}
