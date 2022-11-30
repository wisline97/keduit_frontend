/*
    [문제]
        철수는 주사위2개를 가지고있다.
        주사위는 눔금이 1~6까지 있다
        철수가 주사위 2개를 던지고 그합을 출력하시오.
        단 주사위 눈금이 서로같으면 + 6을 하시오.

    [예]
        1 , 2 ==> 3
        1 , 1 ==> 2 + 6
    */
const dice1 = parseInt(Math.random()*6)+1
const dice2 = parseInt(Math.random()*6)+1

let 합 = 0

if (dice1 == dice2){
    합 = dice1 + dice2 + 6
} else{
    합 = dice1 + dice2
}

console.log("주사위 1:",dice1,"주사위2:",dice2)
console.log("두 주사위의 합은",합)
