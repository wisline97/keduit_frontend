/*
	    [문제]
	
	        자전거는 1분에 4칼로리가 소모되고, 
	        줄넘기는 1분에 9칼로리가 소모된다.
	
	        철수는 95분 동안 505 칼로리를 소모했다. 
	        철수가 각 운동에 사용한 시간은 각각 얼마인가?
	  */

let a = 0
let b = 95

while(true){
	if(4*a + 9*b == 505 && a+b == 95){
		console.log("자전거:",a,"분")
		console.log("줄넘기:",b,"분")
		break
	}
	a += 1
	b -= 1
}