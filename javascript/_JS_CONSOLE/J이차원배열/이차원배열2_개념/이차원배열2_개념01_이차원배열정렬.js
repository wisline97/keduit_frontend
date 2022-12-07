/*

	2차원배열을 정렬해보자.(오름차순 )
*/

var a = [
	[10, 40, 30],
	[21, 20, 62],
	[43, 90, 11],
];


var arr = [];
var index = 0;
for (var i = 0; i < a.length; i++) {
	for (var j = 0; j < a[i].length; j++) {
		arr[index] = a[i][j];
		index += 1;
	}
}

// 일차원배열에 담는다. 
console.log(arr);

for (var i = 0; i < arr.length; i++) {
	for (var j = i; j < arr.length; j++) {
		if (arr[i] > arr[j]) {
			var temp = arr[i];
			arr[i] = arr[j];
			arr[j] = temp;
		}
	}
}

console.log(arr);
index = 0;
for (var i = 0; i < a.length; i++) {
	for (var j = 0; j < a[i].length; j++) {
		a[i][j] = arr[index];
		index += 1;
	}
}
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);