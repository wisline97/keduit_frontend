/*

[설명]
	

    가게 A 에서 한개에 1000원인 음료수가 가게B 에서는 한개에 500원이라고한다.
    가게 B 에 다녀오려면 왕복 교통비가 1600원이 들때, 음료수를 몇개이상 살경우
    가게 B 에서 사는것이 더 유리한지 구하시오.

    [문제]
		위식을 표현하고, 풀이과정을 주석으로 작성하시오.
 */

/* 

1000 * a > 1600 + (500 * a)
1000a > 1600 + 500a
500a > 1600
a > 1600/500
*/

let count = 3.3;

console.log(count, "개 이상");
console.log(1000 * count > 1600 + 500 * count);
