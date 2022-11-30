/*
	  	[문제] 
	  	 	120의 약수중에서 순서대로 약수를 출력했을때, 
               일의자리가4인두번째 약수를 출력하시오.
	 */

let max = 120
let min = 1
let min1 = 0 
let count = 0
while(min<=max){
	 min1 = parseInt(min%10)
	if(max%min == 0 && min1 == 4){
		count += 1
	}
	if(count == 2){
		console.log(min)
		break
	}
	min += 1
}