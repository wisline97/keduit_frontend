/*
	   [문제] 
	   		1~ 999 의 범위안의 숫자중에서 8의 배수를 
               큰수부터 차례대로 4개 출력하시오.
	 */
let min = 1
let max = 999

let count = 4

while(count > 0){
	if(max%8 ==0){
		count -= 1
		console.log(max)
	}
	max -= 1
}