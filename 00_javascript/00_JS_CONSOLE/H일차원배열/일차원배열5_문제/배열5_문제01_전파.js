
/*
	랜덤으로 인덱스를 입력받고 해당 인덱스의 값과  0으로 변경
	
	추가조건 : 해당 값 양옆의 값들도 0으로 변경 
	단, 0, 4 인덱스일경우는 양옆중 한개만 0으로 변경 
	
	(예) 1 ==> [0,0,0,9,9]
	(예) 4 ==> [9,9,9,0,0]
		
 */
var arr = [0, 0, 0, 0, 0];
let idx = arr.length
let num1 = parseInt(Math.random() * idx)
console.log("랜덤 인덱스는", num1, "입니다.")
for (i = 0; i < num1; i++) {
	arr[i] = 9
}

console.log(arr)

