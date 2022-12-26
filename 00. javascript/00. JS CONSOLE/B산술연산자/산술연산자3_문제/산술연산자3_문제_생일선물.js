/*
	[문제]
		철수는 친구의 생일 선물로 
		가격이 4000원인 필통 1개와 
		가격이 700원인 공책 몇권을 사려고 한다. 
		철수는 13000원을 가지고있을때,
		[1]공책은 최대한 몇권을 살수있을지 구하시오.
		[2]필통과 공책들을 구입한후 나머지는 얼마인지 구하시오.
		[정답] 
			[1] 12
			[2] 600
 */

let total = 13000;
let pensilCase = 4000;
let note = 700;

let answer = Math.floor((total - pensilCase) / note);

console.log("[1]", answer, "권");
console.log("[2]", total - pensilCase - note * answer, "원");
