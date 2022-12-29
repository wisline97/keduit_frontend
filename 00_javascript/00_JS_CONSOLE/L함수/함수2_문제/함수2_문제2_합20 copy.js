/*
	아래배열에 랜덤으로 1~10 사이의숫자  3개를 저장한다.
	[조건]
		단, 3개의 숫자의 합은 반드시 20이여야하며, 똑같은 숫자는 없어야한다. 
		위치는 상관없다. 
		[예] 1,10,9
		[예] 9,10,1
	
 */
function sum(arr) {

	while (true) {
		var total = 0;
		for (var i = 0; i < 3; i++) {
			arr[i] = parseInt(Math.random() * 10) + 1;
			total += arr[i];
		}

		var check = false;
		if (arr[0] != arr[1] && arr[1] != arr[2] && arr[0] != arr[2]) {
			check = true;
		}

		if (total == 20 && check == true) {
			break;
		}
	}
}


var arr = [];
sum(arr);

console.log(arr);
