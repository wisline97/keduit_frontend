
/*
   
    lotto 배열이 당첨인지 꽝인지 체크하는 함수를 만드시오.
    단, 7이 연속으로 3개이면 당첨이다.

*/

var lotto = [1, 1, 1, 7, 7, 7, 7];

function lottoCheck(a) {
    var check = false
    var run = true
    var winCount = 0
    while (run) {
        for (i = 0; i < lotto.length; i++) {
            check = false
            if (a[i] == 7 || a[i] == 7 && temp == 7) {
                check = true
            }
            temp = a[i]
            if (check) {
                winCount += 1
            } else {
                winCount = 0
            }
        }
        if (winCount >= 3) {
            console.log("당첨!")
            break
        } else if (winCount < 3) {
            console.log("꽝!")
            break
        }
    }
}


lottoCheck(lotto)