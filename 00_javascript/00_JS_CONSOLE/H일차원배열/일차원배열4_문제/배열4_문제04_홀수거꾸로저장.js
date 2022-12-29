/*

[문제] 다음 리스트를 이용해서 a 의 값중 홀수만 c 에 저장
[조건] 위치는 뒤에서 부터 저장한다. 
[예]   c = [ 0, 0, 17, 51, 49 ]
	
  	
 */
var arr = [10, 49, 51, 36, 17];
var c = [0, 0, 0, 0, 0];

let cIdx = c.length - 1
let y = c.length - 1
for (i = 0; i <= cIdx; i++) {
    if (arr[i] % 2 == 1) {
        c[y] = arr[i]
        y -= 1
    }
}

console.log(c)