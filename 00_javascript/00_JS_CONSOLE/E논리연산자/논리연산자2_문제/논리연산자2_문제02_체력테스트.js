/*
	 	[문제] 
		  	철수는 체력테스트 중이다. 체력테스트는 달리기와 윗몸일으키기 이다. 
		  			  	
		  	운동장을 5바퀴반을 도는데 11분 50초 이하 이면 통과이다.
		  	철수는 운동장 2바퀴도는데 261초가 걸린다. 

		  	윗몸일으키기는 55초 동안 35개를 하면 통과이다. 
		  	철수는 3분동안 118개를 한다고했을때,
		  	
		  	체력테스트는 둘중 한종목만 통과해도 된다.

		  	단, 철수는 항상 같은속도로 달리기와 윗몸일으키기를한다.
		  	철수는 통과할수있을지 주석으로 표현하시오.
	  */

let chulsuRun = 261 / 2;
let chulsuEtc = 118 / 180;

console.log(chulsuRun, "초", chulsuEtc, "개");

console.log(chulsuRun * 5 <= 710);
console.log(chulsuEtc * 55 >= 35);

if (chulsuRun * 5 <= 710 || chulsuEtc * 55 >= 35) {
  console.log("합격");
} else {
  console.log("불합격");
}
