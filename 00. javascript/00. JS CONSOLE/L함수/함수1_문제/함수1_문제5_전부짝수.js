/*
	[문제]
		
		배열의 랜덤값이 모두 짝수면 true 출력하고,
		하나라도 짝수가 아니면 false를 출력하는 함수를 만드시오.
		단, 0은 짝수이다.
	
*/
var arr = [10, 0, 2, 6];

function allEven(a) {
	var check = false
	for (i = 0; i < a.length; i++) {
		if (a[i] % 2 == 0) {
			check = true
		} else {
			check = false
		}
	}
	console.log(check)
}

allEven(arr)