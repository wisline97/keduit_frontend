/*
	    [설명]
		  철수는 농구공을 12번던저서 7번성공했다.
		  영희는 농구공을 17번던저서 9번성공했다.
		  
		  영희의 성공확률이 철수의 성공확률보다 더높나요?

		[문제]
			위식을 표현하고, 풀이과정을 주석으로 작성하시오.
	  */

let chulsu = (100 / 12) * 7;
let younghee = (100 / 17) * 9;

console.log("철수의 성공확률", chulsu.toFixed(2), "%");
console.log("민수의 성공확률", younghee.toFixed(2), "%");

console.log(younghee > chulsu);
