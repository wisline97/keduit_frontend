/*
	[문제]
		철수는 볼펜을 (10~30) 개를 구입해야한다. 
		
		볼펜하나의 가격은 1200원이다. 	
		볼펜은 20개이상구매시 볼펜하나당 100원을 할인해주고있다. 
			
		또한, 회원등급에 따라 할인을 추가제공한다.
		
		회원등급이 1 이면 15% 할인제공,
		회원등급이 2 이면 10% 할인제공,
		기본회원등급은 3이고 할인을 제공하지않는다.
		
		볼펜수를 랜덤으로저장한다.
		회원등급을 랜덤으로저장한다. 
		
		철수가 지불해야하는 금액을 출력하시오.
		
*/

const pen = parseInt(Math.random() * 21 + 10) 
const 등급 = parseInt(Math.random() * 3 + 1)
let penPrice = 1200
let money = pen * penPrice

console.log("회원님의 등급은", 등급,"등급 입니다.")

if(등급 == 3){
	if (pen < 20){
		console.log("볼펜 개수는",pen,"개")
		console.log("총 금액은",money,"원")
	} else{
		penPrice = 1100
		money = pen * penPrice
		console.log("볼펜 개수는",pen,"개")
		console.log("총 금액은",money,"원")
	}

}else if(등급 == 2){
	if (pen < 20){
		let discount = money * 0.10
		console.log("볼펜 개수는",pen,"개")
		console.log("총 금액은",money-discount,"원")
	} else{
		penPrice = 1100
		money = pen * penPrice
		let discount = money * 0.10
		console.log("볼펜 개수는",pen,"개")
		console.log("총 금액은",money-discount,"원")
	}

}else{
	if (pen < 20){
		let discount = money * 0.15
		console.log("볼펜 개수는",pen,"개")
		console.log("총 금액은",money-discount,"원")
	} else{
		penPrice = 1100
		money = pen * penPrice
		let discount = money * 0.15
		console.log("볼펜 개수는",pen,"개")
		console.log("총 금액은",money-discount,"원")
	}
}