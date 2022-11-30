/*
		   1~1000 사이의 숫자를 랜덤받고 다음과 같이 출력하시오.
		   입력받은값이 
		  	1~10 사이 값이면  ==> 1
		   11~20 사이 값이면 ==> 11 
		   21~30 사이 값이면 ==> 21 
		   ......
		   예) 
		   	5 ==> 1
		   	24 ==> 21
		   	154 ==> 151 
		   	10 ==> 1
        
		 */

/* const num = parseInt(Math.random()*1000)+1
let page = parseInt(num / 10) + 1
console.log(num)
console.log(page) */


const num = 30
let page = num % 10 != 0 ? 1 + parseInt(num / 10)*10 : (parseInt(num / 10) - 1) * 10 + 1
console.log(num)
console.log(page)