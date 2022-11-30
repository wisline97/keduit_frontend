/*
	[문제] 다음조건이 전부 맞는 수를 출력하시오.
		
		[조건1] 13 이상 100미만의 숫자중에서 13의 배수를 전부 검사한다.
		[조건2] 그중 6번째 배수에서 4번째 배수를 뺀수를 구한다.
		
	[정답]
		
*/
let min = 13
let max = 100

let count = 0

let count6th = 0
let count4th = 0

while (true){
	if(min%13 == 0){
		count+=1
	}
	if (count == 4){
		count4th = min

		break
	}
	min += 1
}
min = 13
count = 0
while (true){
	if(min%13 == 0){
		count+=1
	}
	if (count == 6){
		count6th = min
		break
	}
	min += 1
}

let answer = count6th - count4th

console.log("정답은",answer)