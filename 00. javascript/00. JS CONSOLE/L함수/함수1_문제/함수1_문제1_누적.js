
/*
    1~10 사이의 숫자를 랜덤으로 2개 저장하고 ,
    작은 숫자 부터 큰숫자까지의 합을 출력하는 함수를 만드시오.
    [예시]
        5, 3 ==> 3 + 4 + 5
        2, 6 ==> 2 + 3 + 4 + 5 + 6
*/
// var answer = 0

function minToMax(a, b) {
    var sum = 0
    if (ran1 > ran2) {
        for (i = ran2; i <= ran1; i++) {
            sum += i
        }
    } else if (ran1 < ran2) {
        for (i = ran1; i <= ran2; i++) {
            sum += i
        }
    } else {
        console.log("두 수가 같아 두 숫자 사이의 모든 수의 합을 구할 수 없습니다.")
    }
    return sum
}

var ran1 = parseInt(Math.random() * 10) + 1;
var ran2 = parseInt(Math.random() * 10) + 1;

var sum = minToMax()

console.log(ran1, ran2)
minToMax(ran1, ran2)
console.log(sum)
