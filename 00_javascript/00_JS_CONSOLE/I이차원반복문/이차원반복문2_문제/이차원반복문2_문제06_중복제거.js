/*
 *  [문제] a 배열 안의 값들중에서 b배열의 값이 있으면 
		  a와 b의 각각 겹치는값을  0으로 변경	
	[조건] 겹치는 값이 여러개 있으면 전부 0으로 변경 	
	 예) a[] = {0,0,30,40,0};
	 예) b[] = {0,3,0,0,0,50};	

    
*/

var a = [10, 20, 30, 40, 20, 60];
var b = [10, 3, 20, 10, 20, 50, 30];
var check = false

for (i = 0; i < a.length; i++) {
	check = false
	for (j = 0; j < b.length; j++) {
		if (a[i] == b[j]) {
			check = true
			var temp = a[i]
			b[j] = 0
		}
	}
	if (check || a[i] == temp) {
		a[i] = 0
	}
}

console.log(a)
console.log(b)


/* 
for (var i = 0; i < a.length; i++) {
	var val = 0;
	for (var j = 0; j < b.length; j++) {
		if (a[i] == b[j]) {
			b[j] = 0;
			val = a[i];
		}
	}
	for (var j = 0; j < a.length; j++) {
		if (a[i] == val) {
			a[i] = 0;
		}
	}
}
 */