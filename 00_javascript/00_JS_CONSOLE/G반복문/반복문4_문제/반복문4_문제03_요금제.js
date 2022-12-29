/*
	 * [문제]
		  아래와같은 휴대요금제가 있다 
		  B를 선택할경우 A보다 더 경제적이될려면,
		  통화시간을 얼마까지 사용해야될까요? 
		  정답을 초로 구하시오.
		  A요금제 기본요금 17500원 초당 5원 
		  B요금제 기본요금 31000원 초당 2원
	  
	 */

let second = 0

let A요금제 = 17500
let B요금제 = 31000

while(true){
	if(A요금제+(second*5) > B요금제+(second*2)){
		console.log(parseInt(second/3600),"시간", parseInt(second%3600/60),"분",parseInt(second%60),"초를 더 사용해야 경제적이다")
		break
	}
	second += 1
}