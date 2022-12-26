/*
   [문제1] a의 을 전부  c에 저장한후, 다시 b의값을 c에 저장한다.
   [예] 
	var a = [10,20,30];
	var b = [40,50,60];
		  c = [10,20,30,40,50,60]
 
	
 */

var a = [10, 20, 30];
var b = [40, 50, 60];
var c = [0, 0, 0, 0, 0, 0];

let idx = c.length - 1
let y = 0
for (i = 0; i <= idx; i++) {
	if (i < a.length) {
		c[i] = a[i]
	}
	if (i >= a.length) {
		c[i] = b[y]
		y += 1
	}
}

console.log(c)