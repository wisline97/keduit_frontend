/*
	철수는 비밀번호를 암호화 하기위해 두칸씩 뒤로 밀어서 저장했다. 
	원래대로 만드시오.
	[정답]
		input = "qwer1234";
 */

var password = ["3", "4", "q", "w", "e", "r", "1", "2"];

var input = password.join('');
var inputFront = input.substring(2, input.length)
var inputEnd = input.substring(0, 2)
var answer = inputFront + inputEnd

console.log(answer)