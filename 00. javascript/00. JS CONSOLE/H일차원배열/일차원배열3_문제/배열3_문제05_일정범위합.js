/*
  [문제]
			array[] = {10, 43, 25, 76, 3, 100, 56};	      
			인덱스 2개를 랜덤으로 입력받고 작은인덱스에서 큰인덱스까지의 값들의 합을 출력한다.
 
  [조건] 
			index1 이 index2 보다 더크더라도 
		작은인덱스부터 큰인덱스까지의 합을 출력한다.
		 
		[예] index1 = 1;  index2 = 3;
		43 + 25 + 76
		
		[예] index1 = 4;  index2 = 1;
		43 + 25 + 76 + 3
  
  
  
 */
var array = [10, 43, 25, 76, 3, 100, 56];
var idx = array.length
var index1 = parseInt(Math.random() * idx);
var index2 = parseInt(Math.random() * idx);
console.log(index1, index2)

var total = 0

for (i = 0; i < idx; i++) {
	if (index2 > index1) {
		if (i >= index1 && i <= index2) {
			total += array[i]
		}
	}
	else {
		if (i >= index2 && i <= index1) {
			total += array[i]
		}
	}
}

console.log(total)