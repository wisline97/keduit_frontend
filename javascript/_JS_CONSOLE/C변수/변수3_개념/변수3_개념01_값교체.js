/*
 	[1] 변수의 값교체 
 		(1) 변수는 한번에 한가지 값만 저장가능하다.
 		(2) 두변수간의 서로 값교체를 하기위해서는 추가적으로 변수가 한개 더필요하다. 	
 */

var a = 10;
var b = 20;

a = b;
b = a;

console.log("a = " + a); // 20
console.log("b = " + b); // 20

console.log("--------------------------");

var x = 10;
var y = 20;
var z = x; // z = 10
x = y; // x = 20
y = z; // y = 10

console.log("x = " + x);
console.log("y = " + y);
