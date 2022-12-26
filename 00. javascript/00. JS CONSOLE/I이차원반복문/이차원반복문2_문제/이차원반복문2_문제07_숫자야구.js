
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
var me = [0, 0, 0];
var i = 0
var check = false

me[0] = 3
me[1] = 5
me[2] = 1



var strike = 0
var ball = 0

var turn = 0
while (strike < 3) {
	console.log("[비교대상 me]")
	console.log(me)
	var com = [NaN, NaN, NaN]
	i = 0
	console.log(turn + 1, "번째 턴")
	while (true) {
		var num = parseInt(Math.random() * 10);
		check = false
		for (k = 0; k < com.length; k++) {
			if (num == com[k]) {
				check = true
			}
		}
		if (check == false) {
			com[i] = num
			i += 1
		}
		if (i > 2) {
			break
		}
	}
	console.log(com)

	for (var meIdx = 0; meIdx < me.length; meIdx++) {
		if (me[meIdx] == com[meIdx]) {
			strike += 1
			console.log("스트라이크!")
			console.log("+1 점")
		}
	}

	console.log("현재 스트라이크 점수 :", strike, "점")

	turn += 1
	console.log("=======================================")

}


