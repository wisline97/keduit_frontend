/*	
    // 문제1) 인덱스(0~2) 2개를 랜덤으로 입력받고 값출력 
    // 예1) 인덱스1 입력 : 1	인덱스2 입력 : 2
    //		   값 출력 : 60 
*/
var arr = [[10, 20, 30], [40, 50, 60], [70, 80, 90]];

var idx1 = parseInt(Math.random() * 3)
var idx2 = parseInt(Math.random() * 3)

console.log("idx1:", idx1)
console.log("idx2:", idx2)


console.log(arr[idx1][idx2])