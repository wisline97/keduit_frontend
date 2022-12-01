/*
 * [문제]
 * 	48의 약수중 홀수의 합을 출력하시오.
 */

let total = 0
let max = 48
let odd = 0
for (i = 1; i <= max; i++) {
    odd = i % 2
    if (max % i == 0 && odd == 1) {
        total += i
    }
}
console.log(total)
