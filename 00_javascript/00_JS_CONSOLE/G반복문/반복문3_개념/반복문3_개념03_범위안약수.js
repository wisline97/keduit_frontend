/*
 * [문제]
 * 	48의 약수중 홀수만 출력하시오.
 */

let max = 48
let i = 1

while(i<=max){
    if(max%i == 0 && i % 2 == 1){
        console.log(i)
    }
    i += 1
}