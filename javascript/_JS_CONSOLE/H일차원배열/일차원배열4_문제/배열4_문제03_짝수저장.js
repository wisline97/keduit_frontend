/*
    [문제1] 아래조건을 모두 만족시키시오.
        [조건1] 아래 배열 a 와 b 를 비교해서 둘의 합을 c에 저장한다.
        [조건2] c의 값중에서 짝수만 d에 저장한다.
        [조건3] d에 저장할때는 앞에서부터 순차적으로 저장한다. 		
        예) c = [23,74,47,82,51]
        예) d = [74,82,0,0,0]



*/

var a = [10, 20, 30, 40, 50];
var b = [13, 54, 17, 42, 1];
var c = [0, 0, 0, 0, 0];
var d = [0, 0, 0, 0, 0];

let idx = a.length
let y = 0
for (i = 0; i < idx; i++) {
    c[i] = a[i] + b[i]
    if (c[i] % 2 == 0) {
        d[y] = c[i]
        y += 1
    }
}

console.log(c)
console.log(d)