/*
	input 에 비밀번호를 입력받고 password 배열로 저장할려고한다.
	단, 암호로 만들기위해 
		한글자는 앞에서 부터 그다음글자는 뒤에서 부터 저장했다.  
	원래대로 만드시오.
	password = ["q" , "4" , "w" ,"3" , "e" , "2" , "r" , "1"];
 */

var input = "";
var password = ["q", "4", "w", "3", "e", "2", "r", "1"];

for (i = 0; i < password.length; i++) {
	if (i % 2 == 0) {
		input += password[i]
	}
}

for (i = password.length - 1; i >= 0; i--) {
	if (i % 2 == 1) {
		input += password[i]
	}
}

console.log(input)