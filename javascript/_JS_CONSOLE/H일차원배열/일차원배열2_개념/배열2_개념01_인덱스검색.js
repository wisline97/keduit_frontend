
/*
	[문제]
		인덱스를(0~4)랜덤저장받고 값을 출력 			
		예) 3
		결과) 24
	    
	    
 */
var array = [10, 543, 52, 24, 67];
let idx = array.length
let num = parseInt(Math.random() * (idx - 1))
console.log("랜덤인덱스는", num + 1, "번째")
console.log("배열의", num + 1, "번째 값은", array[num], "입니다")