/*
	  [문제] 
	  		9의 배수중 100보다 큰 첫번째 배수 출력하시오. 
	 */

let i = 1
let count = 0
while(true){
	if(i%9==0 && i>100){
		count += 1
	}
	if(count == 1){
		console.log(i)
		break
	}
	i+=1
}