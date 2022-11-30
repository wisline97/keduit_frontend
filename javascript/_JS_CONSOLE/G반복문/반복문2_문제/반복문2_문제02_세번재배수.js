/*
	[문제] 
		[1] 숫자 50 ~ 550 사이의 범위에서 
			7의배수를 순차적으로 검색한다.
		[2] 그중 3번째 7의 배수를 출력한다. 
*/

let min = 50
let max = 550
let count = 0

while(true){
	if(min%7 == 0){
		count += 1
	}

	if(count == 3){
		console.log(min)
		break
	}
	min += 1
}