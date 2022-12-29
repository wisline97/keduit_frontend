/* 
		 [문제] 1~10까지 반복문을실행하여 숫자를 출력한다. 
		 	[조건1] 3의배수일때는 "3의배수"를 함께 출력한다.
		 	[조건2] 반복문이 종료하고 3의배수의 개수를 출력하시오.			 
	*/

let i = 0
let count = 0
while (i < 10){
	i+= 1
	if(i%3==0){
		count += 1
		console.log(i,"는 3의 배수")
	} else{
		console.log(i)
	}
}

console.log("3의 배수의 총 개수는", count)