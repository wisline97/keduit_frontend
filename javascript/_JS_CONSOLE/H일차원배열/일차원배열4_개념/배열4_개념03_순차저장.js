/*
	  arr 배열에 랜덤값 -100 ~100을 랜덤으로 저장한다.
	  그중에 음수값만 b에 저장한다.
	  단 , b에 저장할때는 앞에서 부터 순차적으로 저장한다. 
	  (예) 
	  	
		  b = [-10,-30,0,0,0]
 */
var arr = [1, 45, -10, -30, 2];
var b = [0, 0, 0, 0, 0];
let idx = arr.length
let y = 0
for (i = 0; i < idx; i++) {
	if (arr[i] < 0) {
		b[y] = arr[i]
		y += 1
	}
}

console.log(b)