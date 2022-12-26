/*

  [문제] a 배열의 값을 b 배열에 하나씩 저장하는데 순서를 거꾸로 저장 
  [예]   b = [50,40,30,20,10];
 */

var a = [10, 20, 30, 40, 50];
var b = [];

let aIdx = a.length
let y = 0
for (i = aIdx - 1; i >= 0; i--) {
  b[y] = a[i]
  y += 1
}

console.log(b)