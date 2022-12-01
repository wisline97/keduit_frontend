/*
 *  [369게임]
 * 1. 1~50까지 반복을 한다.
 * 2. 그 안에서 해당 숫자의 369게임의 결과를 출력한다.
 *
 * 3. 각각의 숫자에 3이나 6이나 9가 두개 면 "짝짝"
 * 4. 각각의 숫자에 3이나 6이나 9가 한개 면 "짝"
 * 5. 3이나 6이나 9가 없으면 그냥 숫자출력
 *
 * 예) 1 2 짝 4 5 짝 7 8 짝 10 11 12 짝 ...
 */
/*
 * [1] 1 부터 50까지 반복문으로 숫자를 출력한다.
 * [2] 숫자를 십의 자리와 일의 자리로 분리한다.
 * [3] 분리된숫자중에  3,6,9 의 개수를 카운트하고
 * [4] 카운트한 숫자에 맞춰서 결과를 출력한다.
 *
 */
let min = 1
let max = 50
let min10 = 0
let min1 = 0
let count = 0
for (min; min <= max; min++) {
    min10 = min > 9 ? parseInt(min / 10) : 0
    min1 = min % 10
    count = 0
    if (min1 > 0) {
        if (min1 % 3 == 0) {
            count += 1
        }
    }
    if (min10 > 0) {
        if (min10 % 3 == 0) {
            count += 1
        }
    }
    if (count == 0) {
        console.log(min)
    }
    if (count == 1) {
        console.log("짝")
    }
    if (count == 2) {
        console.log("짝짝")
    }
}