/*
		[문제]
			숫자 100이상 900 이하인 9의 배수중에서 10의 자리가 6인 첫번째 배수를 출력 
		[정답]
			162
	 */

let min = 100
let max = 900
let min10 = 0
while(true){
	min10 = min%100 >= 10 ? parseInt(min%100/10) : 0 
	if(min%9 == 0 && min10 == 6){
		console.log(min)
		break
	}
		min+= 1
}
