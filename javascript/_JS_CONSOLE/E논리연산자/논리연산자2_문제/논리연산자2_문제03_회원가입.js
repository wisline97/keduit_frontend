/*
	[문제]	
		join_id 와 join_pw 는 회원가입할때 저장한 값이다.
		login_id 와 login_pw 는 로그인을위해 저장한 값이다.
		나는 로그인할수있을까?	 	
		주석으로 표현하시오.	

*/

var join_id = 1234;
var join_pw = 4321;

var login_id = 1234;
var login_pw = 4333;

if (join_id == login_id && join_pw == login_pw) {
  console.log("로그인 가능");
} else {
  console.log("로그인 불가능");
}
