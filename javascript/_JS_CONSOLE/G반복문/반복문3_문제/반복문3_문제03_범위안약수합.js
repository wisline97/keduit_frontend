/*
 * [문제]
 * 	48의 약수중 홀수의 합을 출력하시오.
 */
let max = 48
let i = 1
let total = 0
while(i<=max){
    if(max%i == 0 && i % 2 == 1){
        total += i
    }
    i += 1
}

console.log(total)