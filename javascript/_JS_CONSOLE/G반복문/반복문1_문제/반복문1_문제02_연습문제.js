/*
	[문제] 아래조건을 만족하는 식을 작성하시오.  
		[조건1] 1~10까지 반복문을 실행하여 숫자를출력한다.
		[조건2] 1~5까지는 "안녕"을 함께 출력한다. 
		[조건3] 6~10까지는 "잘가"를 함께 출력한다.			
*/

let i = 1

while (i<=10){
	if(i<=5){
		console.log(i,"안뇽")
	} else{
		console.log(i,"잘가")
	}
	i+=1
}