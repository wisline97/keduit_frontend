

/*
*  [다음 소수 찾기]
* 1. 숫자를 한 개 랜덤으로 저장한다(1~2000);
* 2. 입력받은 숫자보다 큰 첫 번째 소수를 출력한다.
* 
* 예)  랜덤숫자 :  1000
*    1000보다 큰 첫번재 소수는 1009
* 예)  랜덤숫자 : 500
*    500보다 큰 첫번째 소수는 503
*/

var ran = parseInt(Math.random() * 1999) + 1;
var count = 0
var check = true
console.log("랜덤숫자는", ran)
for (i = 2; check; i++) {
    count = 0
    for (j = 1; j <= i; j++) {
        if (i % j == 0) { count += 1 }
    }
    if (count == 2) {
        if (i > ran) {
            check = false
            console.log("랜덤숫자보다 큰 첫 번째 소수는", i)
        }
    }
}