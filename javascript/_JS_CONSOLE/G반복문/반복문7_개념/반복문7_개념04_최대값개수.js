/*
 * [문제]
 * 	랜덤으로 1~10 를 10번출력하고 ,
 *  가장큰수를 출력하시오.
 *  단 , 가장큰수가 여러번 나온경우 중복출력된 횟수도 출력하시오.
 */

let num = 0
let max = 0

for (i = 0; i < 10; i++) {
    num = parseInt(Math.random() * 10) + 1
    if (max < num) {
        max = num
    }
    console.log(num)
}

console.log("가장 큰 수는", max)
