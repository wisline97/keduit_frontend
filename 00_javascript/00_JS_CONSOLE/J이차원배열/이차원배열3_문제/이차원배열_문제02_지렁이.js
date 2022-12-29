/*		
아래 배열에 값을 1~9까지 저장할려고한다. 
저장방식은 4가지의 지렁이 모양으로 저장할려고한다.
1~4를 입력받고 해당모양으로 숫자를 저장하시오.
지렁이 모양은 아래와같다. 

[예]
	[1 번 선택시] 
	
	123
	654
	789
	
	[2 번 선택시]
	
	
	761
	852
	943
	
	[3번 선택시]
	
	987
	456
	321
	
	[4번 선택시]
	
	349
	258
	167
*/

var arr = [[], [], []];
var num = 1
var input = parseInt(Math.random() * 4) + 1

console.log("인풋값은", input, "입니다")

if (input == 1) {
	for (i = 0; i < 3; i++) {
		for (y = 0; y < 3; y++) {
			arr[i][y] = num
			num += 1
		}
	}
	console.log(arr[0])
	console.log(arr[1])
	console.log(arr[2])
}

if (input == 2) {
	num = 1
	for (i = 2; i >= 0; i--) {
		if (i % 2 == 0) {
			for (y = 0; y < arr.length; y++) {
				arr[y][i] = num
				num += 1
			}
		}
		else if (i % 2 == 1) {
			for (y = 2; y >= 0; y--) {
				arr[y][i] = num
				num += 1
			}
		}
	}
	console.log(arr[0])
	console.log(arr[1])
	console.log(arr[2])
}

if (input == 3) {
	for (i = 2; i >= 0; i--) {
		for (y = 2; y >= 0; y--) {
			arr[i][y] = num
			num += 1
		}
	}
	console.log(arr[0])
	console.log(arr[1])
	console.log(arr[2])
}

if (input == 4) {
	num = 1
	for (i = 0; i < arr.length; i++) {
		if (i % 2 == 0) {
			for (y = 2; y >= 0; y--) {
				arr[y][i] = num
				num += 1
			}
		}
		else if (i % 2 == 1) {
			for (y = 0; y < arr.length; y++) {
				arr[y][i] = num
				num += 1
			}
		}
	}
	console.log(arr[0])
	console.log(arr[1])
	console.log(arr[2])
}