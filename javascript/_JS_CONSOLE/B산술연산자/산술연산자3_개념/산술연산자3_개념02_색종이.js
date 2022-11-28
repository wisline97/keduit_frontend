/*
	
	[문제] 
	  	색종이가 20장있다. 		
	  	[1] 색종이를 3사람이서 똑같은 개수로 나눠가지면 총 몇장을 가질수있는지 구하시오.		
		[2] 위에서 나눠주고 난 나머지는 얼마인지 구하시오.
		
	[정답] 
		6 , 2

 */

var total = 20;
var onePerson = total / 3;
var rest = total % 3;

console.log("[1]", Math.floor(onePerson));
console.log("[2]", rest);
