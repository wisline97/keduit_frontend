/*
  [문제] 
		a 배열안에 1 또는 7만 랜덤으로 7개 저장후 출력. 
		단, 7은 3개 1은 4개여야한다.
		전부 랜덤위치여야한다.
  [예]
		[ 1, 7, 7, 1, 1, 7, 1];
		[ 7, 1, 1, 7, 7, 1, 1];

	 	
*/

let num = 0
let lotto = []
let count1 = 0
let count2 = 0
let i = 0
while (true) {
	num = parseInt(Math.random() * 2) + 1;
	console.log("랜덤넘버는", num)
	if (num == 1) {
		if (count1 < 4) {
			console.log("랜덤넘버는", num, "배열에 1을 추가합니다.")
			lotto[i] = 1
			count1 += 1
			console.log("현재까지 1의 개수는", count1, "개 입니다.")
		} else {
			lotto[i] = 7
		}
	}
	if (num == 2) {
		if (count2 < 3) {
			console.log("랜덤넘버는", num, "배열에 7을 추가합니다.")
			lotto[i] = 7
			count2 += 1
			console.log("현재까지 7의 개수는", count2, "개 입니다.")
		} else {
			lotto[i] = 1
		}
	}
	i += 1
	console.log("====================================================================")
	if (i == 7) {
		break
	}
}
console.log(lotto)