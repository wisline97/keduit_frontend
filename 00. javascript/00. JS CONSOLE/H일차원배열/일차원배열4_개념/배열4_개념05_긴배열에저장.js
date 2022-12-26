/*
   [문제] 
				a의 값을 순차적으로 c에 저장하고 ,
				그리고나서 b의 값을 c의 그뒤부터 자장
   [예] 
	a = [10,20,30];
	b = [40,50,60];
   	
	  c = [10,20,30,40,50,60];
	
 */

var a = [10, 20, 30];
var b = [40, 50, 60];
var c = [0, 0, 0, 0, 0, 0];

let cIdx = a.length + b.length

let aCount = a.length
let i = 0
let y = 0

while (true) {
	if (aCount != 0) {
		c[i] = a[i]
		i += 1
		aCount -= 1
	}
	if (aCount == 0) {
		c[i] = b[y]
		i += 1
		y += 1
	}
	if (i == cIdx) {
		break
	}

}

console.log(c)
