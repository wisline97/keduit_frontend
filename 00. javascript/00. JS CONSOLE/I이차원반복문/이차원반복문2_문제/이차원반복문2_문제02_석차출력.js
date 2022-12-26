/*
 * [석차 출력]
 * 		성적 순으로 번호와 점수 출력 
 */

var numList = [1001, 1002, 1003, 1004];
var scoreList = [87, 42, 11, 98];

var max = 0
var maxNum = 0
var temp = 0
var temp2 = 0
for (i = 0; i < numList.length; i++) {
    for (j = 0; j < scoreList.length; j++) {
        if (scoreList[i] < scoreList[j]) {
            temp = scoreList[i]
            temp2 = numList[i]
            numList[i] = numList[j]
            scoreList[i] = scoreList[j]
            numList[j] = temp2
            scoreList[j] = temp
        }
    }
}

for (i = numList.length - 1; i >= 0; i--) {
    console.log(numList[i], scoreList[i])
}