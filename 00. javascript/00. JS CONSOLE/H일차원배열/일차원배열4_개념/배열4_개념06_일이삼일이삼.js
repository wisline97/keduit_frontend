/*
		[문제]
	 	
		  arr 배열에 순서대로 123을 반복적으로 저장후 출력	 	
	  [예] 
	  	
		  arr = [1,2,3,1,2,3,1,2];
  
 */
var arr = [0, 0, 0, 0, 0, 0, 0, 0];
var idx = arr.length;
var count = 1
for (i = 0; i < idx; i++) {
	if (count <= 3) {
		arr[i] = count
		count += 1
	}
	if (count > 3) {
		count = 1
	}
}

console.log(arr)