/*
	[1] 변수의 기본종류
		(1) 정수 : 소수점이 없는수
		(2) 실수 : 소수점이 있는수
		(3) 문자  : string
		(4) 참과 거짓 : boolean		
	
    [2] typeof() 함수
        typeof 함수를 통해서 변수의 종류를 확인할수있다. 
        아무것도 없으면 undefined 라고 출력된다. 
 */
var a = 10;
var b = 10.3;
var c = "aaaa";
var d = false;
var e;

console.log(typeof a); // number
console.log(typeof b); // number
console.log(typeof c); // string
console.log(typeof d); // boolean
console.log(typeof e); // undefined
