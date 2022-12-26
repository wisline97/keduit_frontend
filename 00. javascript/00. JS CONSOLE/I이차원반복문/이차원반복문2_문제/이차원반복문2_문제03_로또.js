
/*
  [문제]
  
	  [로또] 
	1~45사이의 랜덤값 6 개를 lotto1 에 저장할려고 한다.
	[조건] 중복되는숫자는 없어야한다. 
*/

var lotto1 = []
var check = false
var num = 0
var idx = 0

for (i = 0; i < 6; i++) {
	lotto1[i] = 0
}

while (true) {
	check = false
	num = parseInt(Math.random() * 45) + 1
	console.log("랜덤숫자는", num)
	for (i = 0; i < lotto1.length; i++) {
		if (num == lotto1[i]) {
			check = true
			break
		}
	}
	if (check == false) {
		lotto1[idx] = num
		idx += 1
	}
	if (idx == 6) {
		break
	}
}


console.log(lotto1)