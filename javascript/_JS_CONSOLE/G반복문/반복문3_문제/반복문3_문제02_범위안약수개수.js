/*
 * [문제]
 * 	48의 약수중 홀수의 개수를 출력하시오.
 */

let max = 48
let i = 1
let count = 0
while(i<=max){
    if(max%i == 0 && i % 2 == 1){
        count += 1
    }
    i += 1
}

console.log(count,"개")