/*
	  아래 배열에 랜덤값 -100 ~ 100을 4개 저장후 
	 그값중 음수만 temp에 저장후 arr과 temp 출력.
 	
 	
			  temp = [0,0,-11,0];
*/

var arr = [20, 43, -11, 36];
var temp = [0, 0, 0, 0];

let idx = arr.length

for (i = 0; i < idx; i++) {
	if (arr[i] < 0) {
		temp[i] = arr[i]
	}
}

console.log(temp)