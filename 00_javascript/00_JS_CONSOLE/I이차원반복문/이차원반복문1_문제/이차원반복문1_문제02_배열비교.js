/*
		[문제] 
			a 배열과  b배열을 서로 비교해서 
		a 의 값이  b배열에 없으면 c 에저장
		var a = [10,20,30,40];	
		var b = [10,5,20,9];
	[정답]
		[30, 40]
*/
var a = [10, 20, 30, 40];
var b = [10, 5, 20, 9];
var c = [];
var ci = 0;
var check = 0
for (i = 0; i < a.length; i++) {
	check = true
	for (y = 0; y < b.length; y++) {
		if (a[i] == b[y]) {
			console.log(a[i], b[y])
			check = false
		}
	}
	if (check) {
		c[ci] = a[i]
		ci += 1
	}
}

console.log(c)