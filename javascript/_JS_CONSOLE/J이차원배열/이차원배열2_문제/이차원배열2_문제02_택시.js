/*
		  [테스트]

		  현재 택시는 5 , 5 위치에 있다.
		  배열의 왼쪽세로줄은 속도를 뜻한다.
		  배열의 오른쪽세로줄은 방향 뜻하고 (0, 1, 2, 3) 은 (북, 동, 남, 서) 를 뜻한다.

		  속도 와 방향은 택시가 매번이동한 내용을 기록한것이다.

		  예) 속도는 4 이고 방향은 0 이니 북쪽을 뜻한다.
			  y가 4증가해  x : 5 , y : 9 가된다.

			 6번 모두 이동한후 택시의 위치를 출력하시오.

	 */

// 속도, 방향
var arr = [
	["4", "북"],
	["2", "동"],
	["1", "남"],
	["5", "서"],
	["4", "서"],
	["2", "동"]
];
var x = 5;
var y = 5;

for (i = 0; i < arr.length; i++) {
	if (arr[i][1] == "북") {
		y += parseInt(arr[i][0])
		console.log(x, y)
	}
	if (arr[i][1] == "동") {
		x += parseInt(arr[i][0])
		console.log(x, y)
	}
	if (arr[i][1] == "남") {
		y -= parseInt(arr[i][0])
		console.log(x, y)
	}
	if (arr[i][1] == "서") {
		x -= parseInt(arr[i][0])
		console.log(x, y)
	}
}

/* var arr = [
	[4, "북"],
	[2, "동"],
	[1, "남"],
	[5, "서"],
	[4, "서"],
	[2, "동"]
];
var x = 5;
var y = 5;

for (var i = 0; i < arr.length; i++) {
	if (arr[i][1] == "북") {
		y += arr[i][0];
	} else if (arr[i][1] == "동") {
		x += arr[i][0];
	} else if (arr[i][1] == "남") {
		y -= arr[i][0];
	} else if (arr[i][1] == "서") {
		x -= arr[i][0];
	}
	console.log(x, y)
} */
