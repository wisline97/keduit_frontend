/*
	[문제] 
	    한번에 500kg 까지 운반할수 있는 승강기가 있다.
	    몸무게가 80kg인 배달원이 이 승강기를 타고 
	    하나의 무게가 30kg인 상자를 운반하려고 할 때,
	    한번에 최대 몇 상자까지 운반할 수 있는지 알아보자.
	    
	[정답]
		14
 */

let limit = 500;

let able = Math.floor((limit - 80) / 30);

console.log(able, "상자");
