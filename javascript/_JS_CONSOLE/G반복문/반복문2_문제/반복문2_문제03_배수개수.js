/*
	   [문제] 
		  50에서 100까지 자연수중에서 9의 배수의 개수를 출력하시오.
		  답 : 6개
	 */


let min = 50
let max = 100
let count = 0

while(min <= max){
	if(min%9==0){
		count += 1
	}
	min += 1
}

console.log(count,"개")