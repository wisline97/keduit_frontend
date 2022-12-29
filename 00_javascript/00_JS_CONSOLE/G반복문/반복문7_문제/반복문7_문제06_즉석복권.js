/*
		랜덤으로 1또는 7 을 10번출력한다. 
		7이 연속으로 3번이상이면 "당첨" 아니면 "꽝" 출력 
		
	 */

var lotto = []
for (i = 0; i < 10; i++) {
	var num = parseInt(Math.random() * 2)
	if (num == 0) {
		lotto[i] = 1
	} else {
		lotto[i] = 7
	}
}

console.log(lotto)
var check = false
var count = 0
for (i = 0; i < lotto.length; i++) {
	if (i + 2 < lotto.length) {
		if (lotto[i] == 7 && lotto[i + 1] == 7 && lotto[i + 2] == 7) {
			check = true
		}
	}
}

if (check) {
	console.log("당첨")
} else {
	console.log("꽝")
}