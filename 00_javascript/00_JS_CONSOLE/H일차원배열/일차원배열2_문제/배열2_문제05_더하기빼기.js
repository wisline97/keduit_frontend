/*
	[문제1] 
	
	 array1배열 과 array2배열의 각자리별 합을 temp1에저장
	 temp1 = [10 + 5 , 20 + 8, 30 + 54, 40 + 32, 50 + 1];
			
	[문제2] 
	
	 array1배열 과 array2배열의 각자리별 차를 temp2에저장
	 temp2 = [10 - 5 , 20 - 8, 30 - 54, 40 - 32, 50 - 1];

 
 */
var array1 = [10, 20, 30, 40, 50];
var array2 = [5, 8, 54, 32, 1];
var temp1 = [];
var temp2 = [];

let idx = array1.length

for (i = 0; i < idx; i++) {
	temp1[i] = array1[i] + array2[i]
	temp2[i] = array1[i] - array2[i]
}

console.log(temp1)
console.log(temp2)