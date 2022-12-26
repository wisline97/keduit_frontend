/*
 * [문제]
 * 	48의 약수중 홀수의 개수를 출력하시오.
 */

let max = 48
let count = 0
for (i = 1; i <= max; i++) {
    if (max % i == 0) {
        console.log(i)
        count += 1
    }
}

console.log(count)