/*
	input 에 비밀번호를 입력받고 password 배열로 저장할려고한다.
	단, 암호로 만들기위해 
		한글자는 앞에서 부터 그다음글자는 뒤에서 부터 저장한다. 
	[예]
		input = "qwer1234";
		password = ["q" , "4" , "w" ,"3" , "e" , "2" , "r" , "1"];
 */

var input = "qwer1234";
var password = [];
var idx = 0
var idx2 = 0
for (i = 0; i < 8; i++) {
	if (i % 2 == 0) {
		password[i] = input[idx2]
		idx2 += 1
	} else {
		password[i] = input[(input.length - 1) - idx]
		idx += 1
	}
}

console.log(password)
