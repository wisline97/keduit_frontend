
/*
	[문제]
		val 에 있는값이 arr 에 포함되어있는지 검사
		포함되어있으면 인덱스(위치)를 출력한다.
		예) 67
		결과) 4

	    
 */
var array = [10, 543, 52, 24, 67];
var val = 67;

for (i = 0; i < array.length; i++) {
	if (array[i] == val) {
		console.log(i)
	}
}