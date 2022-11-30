/*
	[문제] 
  		6의 배수를 순차적으로 검사한다. 
  		그중 100에 가장가까운 수를 출력 
 		정답 : 102
*/

let i = 1
let count = 0
while(true){
	if(i%6 ==0 && i>100){
		count += 1
	}

	if(count == 1){
		console.log(i)
		break
	}
	i += 1
}