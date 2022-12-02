/*
[문제] 인덱스 2개(0~4)를 랜덤으로 저장하고  값 교체하기
	
 var array = [ 10, 20, 30, 40, 50 ];	
[예시]
 var i1 = 1;
 var i2 = 3;		


[결과]
 array = [10, 40, 30, 20, 50]
*/
var array = [10, 20, 30, 40, 50];
var i1 = 0;
var i2 = 0;


while (true) {
    i1 = parseInt(Math.random() * 5);
    i2 = parseInt(Math.random() * 5);
    if (i1 != i2) {
        console.log(i1, i2)
        break
    }
}

let idx = array.length
let temp = 0

temp = array[i1]
array[i1] = array[i2]
array[i2] = temp

console.log(array)