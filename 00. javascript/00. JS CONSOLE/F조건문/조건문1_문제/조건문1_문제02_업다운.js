/*
    [문제]
        숫자 두개를 랜덤으로 저장한다(1~100)

        두숫자중 더큰숫자를 출력한다. 
        서로같으면 같다출력
	 */

let num1 = parseInt(Math.random() * 100 + 1);
let num2 = parseInt(Math.random() * 100 + 1);

console.log(num1, num2);

if (num1 > num2) {
  console.log(num1, "이 더 크다");
} else {
  console.log(num2, "이 더 크다");
}
