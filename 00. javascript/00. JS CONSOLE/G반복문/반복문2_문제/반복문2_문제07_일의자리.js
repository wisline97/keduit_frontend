/*
	  [문제] 
	  	9의 배수중 일의 자리가 6인 첫번째 배수 출력하시오.
	    답 : 36
	 */

let i = 1

let count = 0

while(true){
	let i1 = i > 10 ? i%10 : i
	if(i%9==0 && i1 == 6){
		console.log(i)
		break
	}
	i += 1
}
