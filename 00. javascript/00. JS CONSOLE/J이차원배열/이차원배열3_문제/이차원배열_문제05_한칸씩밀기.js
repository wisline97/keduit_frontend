/*

[문제] 방향을 입력받고 입력받은 방향으로 한칸씩민다 밀린숫자는 뒤로붙는다.
	 방향은 북 , 동 , 남 , 서 이다.
	var dir = ["북" , "동" , "남" , "서"];
		var arr = [
			[ 3, 1, 2, 5, 6 ],
			[ 2, 5, 1, 3, 5 ], 
			[ 1, 2, 1, 3, 9 ] 
			];
[예] 
	[1] "북" ==> 위로 한칸씩 이동하고 맨윗줄은 맨아래로 이동한다.			 		
	[ 2, 5, 1, 3, 5 ], 
	[ 1, 2, 1, 3, 9 ] 
	[ 3, 1, 2, 5, 6 ],
		
	[2] "동" ==> 오른쪽으로 한칸씩 가고 맨오른족줄은 맨왼쪽으로 이동한다.
	
	[6, 3, 1, 2, 5],
	[5, 2, 5, 1, 3], 
	[9, 1, 2, 1, 3] 


*/

/*

[배열 숫자 왼쪽으로 1칸 밀기]
var arr = [3, 1, 2, 5, 6];
for (i = 0; i < arr.length - 1; i++) {
	temp = arr[i + 1]
	arr[i + 1] = arr[i]
	arr[i] = temp
}

console.log(arr)

[배열 숫자 오른쪽으로 1칸 밀기]
var arr = [3, 1, 2, 5, 6];
var end = arr.length - 1
for (i = end; i > 0; i--) {
	temp = arr[i - 1]
	arr[i - 1] = arr[i]
	arr[i] = temp
}

console.log(arr) 
*/


var dir = ["북", "동", "남", "서"]
var arr = [
	[3, 1, 2, 5, 6],
	[2, 5, 1, 3, 5],
	[1, 2, 1, 3, 9]
];

for (i = 0; i < dir.length; i++) {
	if (dir[i] == "북") {
		//위로 한 칸 밀기
		for (y = 0; y < arr.length - 1; y++) {
			temp = arr[y + 1]
			arr[y + 1] = arr[y]
			arr[y] = temp
		} console.log("북")
		console.log(arr[0])
		console.log(arr[1])
		console.log(arr[2])
	}
	if (dir[i] == "동") {
		//왼쪽으로 한 칸 밀기
		for (y = 0; y < arr.length; y++) {
			var end = arr[y].length - 1
			for (j = end; j > 0; j--) {
				temp = arr[y][j - 1]
				arr[y][j - 1] = arr[y][j]
				arr[y][j] = temp
			}
		} console.log("동")
		console.log(arr[0])
		console.log(arr[1])
		console.log(arr[2])
	}
	if (dir[i] == "남") {
		//아래로 한 칸 밀기
		var end = arr.length - 1
		for (y = end; y > 0; y--) {
			temp = arr[y - 1]
			arr[y - 1] = arr[y]
			arr[y] = temp
		}
		console.log("남")
		console.log(arr[0])
		console.log(arr[1])
		console.log(arr[2])
	}
	if (dir[i] == "서") {
		//오른쪽으로 한 칸 밀기
		for (y = 0; y < arr.length; y++) {
			for (j = 0; j < arr[y].length - 1; j++) {
				temp = arr[y][j + 1]
				arr[y][j + 1] = arr[y][j]
				arr[y][j] = temp
			}
		}
		console.log("서")
		console.log(arr[0])
		console.log(arr[1])
		console.log(arr[2])
	}
}