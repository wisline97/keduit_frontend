/*
	[문제] 
		철수와 영희는 50000원 을 가지고있다. 
		철수와 영희는 같이 영화 1편을 관람했다.
		간식은 팝콘 1개와 콜라 2개를 사먹었다.
		아래 힌트를 참고하여 남은돈은 얼마인지 구하시오. 
		[힌트] 
			(1) 콜라 1개는  팝콘 1개 보다 4000원 싸다.
			(2) 영화 1편의 가격은 12000 원이다.
			(3) 팝콘의 가격은 영화의  6/10 가격이다.  
			
	[정답]
		12400
 */

let total = 50000;
let ticket = 12000;
let popcorn = ticket * (6 / 10);
let coke = popcorn - 4000;

let rest = total - ticket * 2 - popcorn - coke * 2;
console.log(rest, "원");
