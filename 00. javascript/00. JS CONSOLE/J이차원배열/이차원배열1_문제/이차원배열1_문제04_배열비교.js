/*
	a배열과 b배열의 겹치는 값을 전부 0으로 변경 
	[정답]
	30, 40, 50 을 전부 0으로 변경한다.
*/

var a = [
	[10, 20, 30],
	[40, 50, 60],
	[70, 80, 90],
];
var b = [
	[23, 40, 21],
	[4, 34, 50],
	[67, 11, 30],
];

for (x = 0; x < a.length; x++) {
	for (y = 0; y < a[x].length; y++) {
		for (z = 0; z < b.length; z++) {
			for (j = 0; j < b[z].length; j++) {
				if (a[x][y] == b[z][j]) {
					a[x][y] = 0
					b[z][j] = 0
				}
			}
		}
	}
}

console.log(a[0])
console.log(a[1])
console.log(a[2])


console.log(b[0])
console.log(b[1])
console.log(b[2])