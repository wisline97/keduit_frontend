/*
 * [문제]
 * 	 	100의 5번째 약수에서 2번째 약수를 뺀값을 구하시오.
 */
let max = 100
let i = 1
let count = 0
let count5th = 0
let count2th = 0
while(i<=max){
    if(max%i == 0){
        count += 1
    }
    if(count == 2){
        count2th = i
        break
    }
    i += 1
}

i = 1
count = 0
count5th = 0

while(i<=max){
    if(max%i == 0){
        count += 1
    }
    if(count == 5){
        count5th = i
        break
    }
    i += 1
}

console.log(count5th-count2th)