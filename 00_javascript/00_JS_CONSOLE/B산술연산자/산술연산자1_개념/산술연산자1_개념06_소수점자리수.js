/*
        [1] 변수 = 소수점;
        [2] 변수 = 변수.toFixed(자리수);
        소수점 자리수를 자르고 반올림해준다.
    */

var x = 3.1353453453;
console.log(x);
var y = x.toFixed(2);
console.log(y); // 3.14

var z = 3.1;
z = z.toFixed(2);
console.log(z); //3.10
