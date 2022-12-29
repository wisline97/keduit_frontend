/*
  [문제] a의 값을 번갈아가면서 b, c 에 각각 저장 
  [예]
		a = [10,20,30,40,50,60];
		b = [10,30,50]
		c = [20,40,60];

 */

var a = [10, 20, 30, 40, 50, 60];
var b = [0, 0, 0];
var c = [0, 0, 0];

let idx = a.length

let bIdx = 0
let cIdx = 0

for (i = 0; i < idx; i++) {
	if (i % 2 == 0) {
		b[bIdx] = a[i]
		bIdx += 1
	}
	if (i % 2 != 0) {
		c[cIdx] = a[i]
		cIdx += 1
	}
}

console.log(b)
console.log(c)