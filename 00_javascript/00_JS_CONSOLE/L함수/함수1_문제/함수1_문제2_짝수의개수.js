
/*
    배열안의 값들을 체크하여 짝수의 개수를 출력하는 함수를 만드시오.
*/

var arr = [2, 45, 1, 12, 4, 8, 33, 690];
function evenCounter(a) {
    var evenCount = 0
    for (i = 0; i < a.length; i++) {
        if (a[i] % 2 == 0) {
            evenCount += 1
        }
    }
    console.log(evenCount)

}

evenCounter(arr)
