/*
 * [문제]
 *  18의 약수를 출력하시오
 */
let max = 18
let i = 1

while(i<=max){
    if(max%i == 0){
        console.log(i)
    }
    i += 1
}