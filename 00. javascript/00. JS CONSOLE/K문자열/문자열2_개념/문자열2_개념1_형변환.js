/*
      	
var str = "11/100/89";
// 문제 1) arr 배열에 각 점수를 저장하고 출력
	
	
*/

var str = "11/100/89";
var arr = str.split("/");

for (i = 0; i < arr.length; i++) {
    arr[i] = parseInt(arr[i])
    console.log(arr[i])
} console.log(arr)