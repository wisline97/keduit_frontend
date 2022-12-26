/*
	[369게임]
	[1] 1~99 사이의 랜덤 숫자를 저장한다.
	[2-1] 랜덤숫자중에서 3이나 6이나 9의 개수가  2개면, 짝짝을 출력한다.
	[2-2] 랜덤숫자중에서 3이나 6이나 9의 개수가  1개면, 짝을 출력한다.
	[2-3] 0개이면, 해당 숫자를 출력한다.
	(예)
		33	==> 짝짝
		16	==> 짝
		 7	==> 7
*/

const num = parseInt(Math.random()*99)+1
const num10 = num >= 10 ? parseInt(num/10) : undefined
const num1 = num%10 == 0 ? undefined : num%10

console.log(num)
let count = 0
if(num10 % 3 == 0){
	count += 1
}
if(num1%3==0){
	count += 1
}


if(count == 1){
	console.log("짝")
} else if(count == 2){
	console.log("짝짝")
}