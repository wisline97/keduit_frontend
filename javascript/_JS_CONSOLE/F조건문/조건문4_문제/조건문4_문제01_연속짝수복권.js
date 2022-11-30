/*
	[연속짝수복권]
		100~900 사이의 랜덤숫자를 출력한다. 
		세자리의 숫자를 전부 한자리씩 분리한다.		
	[규칙]
		[1] 세자리모두 짝수이면 "1등" 출력.
		[2] 두자리가 짝수이고, 짝수인숫자가 연속이면  "2등" 출력. 
		[3] 그외는 "꽝" 출력. 
		[4] 단, 0은 짝수이다.
	[예]
		462 ==> 4,6,2 세자리 모두 짝수이므로 ==> 1등
		245 ==> 2,4,5 두자리가 짝수이고 2,4연속이므로 ==> 2등
		456 ==> 4,5,6 두자리가 짝수이지만 연속이 아니므로 ==> 꽝
		782 ==> 7,8,2 두자리가 짝수이고 8,2연속이므로 ==> 2등 	
*/

/* 
num = 100
*/

const num = parseInt(Math.random()*800)+100
const num100 = parseInt(num / 100)
const num10 = num%100 / 10 != 0 ? parseInt(num%100 / 10) : 0
const num1 = num%10 > 0 ? num%10 : 0

console.log(num)
console.log(num100)
console.log(num10)
console.log(num1)

let count = 0

if (num100%2 == 0 && num10%2 == 0 && num1%2 == 0){
	count += 3
}

if (num100%2 == 0 && num10%2 == 0){
	count += 2
}

if (num10%2 == 0 && num1%2 == 0){
	count += 2
}


if (count == 0){
	console.log("꽝")
}

if (count == 2){
	console.log("2등")
}

if (count >= 3){
	console.log("1등")
}