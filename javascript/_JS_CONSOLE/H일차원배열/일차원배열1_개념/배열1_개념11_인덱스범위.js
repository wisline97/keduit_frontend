/*
    
		인덱스를 (0~4) 를 랜덤저장하고 그 인덱보다 작은인덱스의 값만 출력
		[예] 2
			2 를선택하면 2보다 작은 인덱스는 0, 1 이고,
			  array[0] 과 array[1] 의 값은 10,20이다.
		 	
		결과) 10, 20
 */
var array = [10, 20, 30, 40, 50];

let idx = array.length
let num = parseInt(Math.random() * 5)

console.log("랜덤인덱스는", num)
console.log("랜덤인덱스보다 작은 숫자들은")
for (i = 0; i < num; i++) {
	console.log(array[i])
}

