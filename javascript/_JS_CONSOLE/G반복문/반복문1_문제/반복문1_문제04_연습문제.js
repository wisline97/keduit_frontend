/*
    [문제] 아래조건을 충족하는 식을 작석하시오.
        [조건1] 10~1까지 거꾸로 반복문을 실행한다.
        [조건2] 3의 배수일때는 "안녕" 을 출력한다.
        [조건3] 3의 배수가 아닐때는 숫자를 출력한다. 
*/

let i = 10

while(i>0){
	if(i%3==0){
	console.log("안녕")
}else{
	console.log(i)
}
	i-=1
}