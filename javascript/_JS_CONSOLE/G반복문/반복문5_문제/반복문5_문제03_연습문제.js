/* 
		 [문제1] 1~10까지 중에서 3미만 7이상의 합을 출력하시오.
			   1 + 2 + 7 + 8 + 9 + 10
		 [정답1] 37
	
		 [문제2] 1~10까지 중에서 3미만 7이상의 개수를 출력하시오. 
				 1,2,7,8,9,10 ==> 6개 
		 [정답2] 6 
		 
			  for를 사용하시오.
	*/

console.log("============================")
console.log("문제1")
let total = 0

for (i = 1; i <= 10; i++) {
	if (i < 3) {
		total += i
	}
	if (i >= 7) {
		total += i
	}
}

console.log(total)
console.log("============================")
console.log("문제2")

let count = 0

for (i = 1; i <= 10; i++) {
	if (i < 3) {
		count += 1
	}
	if (i >= 7) {
		count += 1
	}
}
console.log(count)