/*	  
	  	[가운데 숫자 맞추기 게임]	  
		   [1] 10000~90000 사이의 랜덤 숫자 저장한다.
		   [2] 랜덤 숫자의 가운데 숫자를 출력하시오.
		[예]
	  		[제시] ==> 24912 
	  		[출력] ==> 9
	  	
	 */

const num = parseInt(Math.random()*80000) + 10000
const midNum = parseInt(num % 1000 / 100)

console.log(num)
console.log(midNum)