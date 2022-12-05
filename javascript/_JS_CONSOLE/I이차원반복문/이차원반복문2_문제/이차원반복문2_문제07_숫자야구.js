
/*
	  [숫자 야구 게임]		
		[1] com 배열에 0~9사이의 숫자 3개를 저장 단 com배열안에 중복값이 없어야한다.
		[2] me 배열에 0~9사이의 숫자 3개를 직접저장한다 단 me배열안에 중복값이 없어야한다.
		[3] com 과 me 를 비교해서 숫자가 같고 자리도 같으면 strike + 1;
		[4] com 과 me 를 비교해서 숫자가 같고 자리가 틀리면 ball + 1;
		[5] 사용자에게 strike 와 ball  개수를 출력한다. 
		매턴마다 위를 반복하면서 strike += 3 이 될때까지 반복한다.

 */

var com = [];
var me = [];
var check = false
var count = 0
var i = 0

for (j = 0; j < 3; j++) {
	com[j] = NaN
	me[j] = NaN
}

while (true) {
	var num = parseInt(Math.random() * 10);
	check = false
	console.log(num)
	for (k = 0; k < com.length; k++) {
		if (num == com[k]) {
			check = true
		}
	}
	if (check == false) {
		com[i] = num
		i += 1
		count += 1
	} else {
		continue
	}
	if (count == 3) {
		break
	}
}

console.log(com)

me[0] = 3
me[1] = 5
me[2] = 1

console.log(me)