/*
	[설명]
		 	제주도 올레길을 갈때는 시속 2킬로미터로 걷고, 
		 	올때는 같은 길을 시속 3킬미터로 걸어서 
		 	전체 걸리는 시간을 5시간 이내로 하려고 한다.
		 	최대 몇킬로미터 지점까지 갔다가 되돌아오면되는지 구하시오.
            

	[문제]
		위식을 표현하고, 풀이과정을 주석으로 작성하시오.
	 */

/* 
거리 = a
갈 때 분속 2/60
올 때 분속 3/60

갈 때 1m 당 시간 60/2000
올 때 1m 당 시간 60/3000

거리 = a

0.03 * a + 0.02 * a < 300
0.03a + 0.02a < 300
0.05a < 300
5/100a<300
a<300 * 100/5
a<6000
a < 6km
		*/

a = 5;

console.log((60 / 2000) * a + (60 / 3000) * a < 300);
