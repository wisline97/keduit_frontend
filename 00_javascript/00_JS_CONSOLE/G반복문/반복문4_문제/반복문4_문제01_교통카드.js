/*
	    [문제]
	    
	     선호네 반 학생 25명이 체험학습을 하러 가기위해
	     버스를 탔는데 , 총요금이 19400원이였다.
	
	     교통카드를 사용하면 720원이고 , 
	     현금으로 지불하면 1000원일때, 
	
	     교통카드를 사용한 학생수와 현금을 사용한 학생수는 
	     각각 얼마인가?
 */

// 교통카드
let a = 0

// 현금
let b = 25

while(true){
	if(a+b == 25 && 720*a + 1000*b == 19400){
		console.log("교통카드를 사용한 학생",a)
		console.log("현금을 사용한 학생",b)
		break
	}
	a+=1
	b-=1
}