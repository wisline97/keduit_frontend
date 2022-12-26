/*
        [문제] a 배열안에 1 또는 7만 랜덤으로 7개 저장후 출력. 
        [예] 1,7,7,1,1,7,7
    */
let num = 0
var array = [];
let count = 0
while (true) {
    num = parseInt(Math.random() * 7) + 1;
    if (num == 1) {
        array[count] = num
        count += 1
    }
    if (num == 7) {
        array[count] = num
        count += 1
    }
    if (count == 7) {
        break
    }
}
console.log(array)
