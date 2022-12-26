/*
    [변수의 형번환]
        [1] 숫자를 문자로 변환
        String(숫자)

        [2] 문자를 숫자로 변환
        Number(문자)

        단, 모든문자를 숫자로 변환하는것이 아니고 내용이 숫자여야한다.
        [예] Number("10") ==> 10
        [예] Number("a") ==> NaN (에러)

 */

var a = 10;
var b = String(a);
console.log(b + 10); // 1010

var c = "10";
var d = Number(c);
console.log(d + 10); // 20

var e = "a";
var f = Number(e);
console.log(f); // Nan 이 출력된다. (에러라고 생각하면된다.)

var g = "10.3";
var h = Number(g);
console.log(h + 10); // 20.3
