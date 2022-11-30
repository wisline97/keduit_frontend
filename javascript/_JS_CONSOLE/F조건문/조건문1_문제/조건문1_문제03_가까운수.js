/*
		[문제]		
    a 는 랜덤으로 1~99를 랜던저장한다.
    b 는 랜덤으로 101~199 를 랜덤저장한다.

    a 와 c 중 어떤숫자가 b 와 더가까운지 출력하시오.
    [1] a 가 b 보다 가까우면 "a가 가깝다."
    [2] c 가 a 보다 가까우면 "c가 가깝다."
    [3] 서로 거리가 같으면 "서로같다"
	 */
var a = parseInt(Math.random() * 99 + 1);
var b = 100;
var c = parseInt(Math.random() * 99 + 101);

console.log("a:", a, "b:", b, "c:", c);

let bToa = b - a;
let bToc = c - b;

console.log("b에서 a 사이의 거리:", bToa);
console.log("b에서 c 사이의 거리:", bToc);

if (bToa > bToc) {
  console.log("c가 b에 더 가깝다.");
} else if (bToa == bToc) {
  console.log("둘의 거리는 같다.");
} else {
  console.log("a가 b에 더 가깝다.");
}
