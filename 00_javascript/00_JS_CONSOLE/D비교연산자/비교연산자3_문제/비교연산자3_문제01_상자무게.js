/*
[설명]
    무게가 2킬로그램인 상자에 한개에 5킬로그램인 
    물건을 x개 넣으면 전체 무게가 30킬로그램을 넘는다.
 [문제]
		위식을 표현하고, 풀이과정을 주석으로 작성하시오.
*/
/* 
2 + 5x > 30
5x > 28
x > 28/5
*/

x = 28 / 5 + 1;
console.log(x, "개");
console.log(2 + 5 * x > 30);
