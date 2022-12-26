/*
	input 에 비밀번호를 입력받고 password 배열로 저장할려고한다.
	단, 암호로 만들기위해 2칸씩 뒤로 밀어서 저장한다. 밀린글자는 앞에서 저장한다.
	
	[예]
		input = "qwer1234";
		password = {"3","4","q","w","e","r","1","2"};
 */

var input = "qwer1234";
var inputFront = input.substring(0, input.length - 2)
var inputEnd = input.substring(input.length - 2, input.length)
var after = inputEnd + inputFront
var password = after.split("");

console.log(password)