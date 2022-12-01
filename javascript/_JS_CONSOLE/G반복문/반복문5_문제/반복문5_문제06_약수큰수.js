/*
 * [문제]
 * 	 	100의 약수중에서 큰수부터 4개만 출력
 */

let max = 100
let count = 0
for (i = max; i >= 1; i--) {

    if (max % i == 0) {
        console.log(i)
        count += 1
    }

    if (count == 4) {
        break
    }

}