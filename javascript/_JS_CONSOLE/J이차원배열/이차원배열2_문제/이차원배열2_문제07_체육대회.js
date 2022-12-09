/*	
    철수네반은 체육대회를 준비하고있다. 
    달리기 배열은 달리기대회 에 참가하는 학생들이다. 
    배구 배열은 배구 대회에 참가하는 학생들이다.
    둘중 하나만 참가하는 학생들을 c배열에 저장하시오.
*/

var 달리기 = [
    ["김철수", "이서영", "최민식"],
    ["조춘자", "김말숙", "이진상"],
    ["유재석", "박명수", "킬리만자로"],
];
var 배구 = [
    ["신민아", "김말숙", "최재식"],
    ["최민식", "이서영", "소지석"],
    ["이민자", "유명새", "조춘자"],
];
var c = [];
var cIdx = 0

for (x = 0; x < 달리기.length; x++) {
    for (y = 0; y < 달리기[x].length; y++) {
        var check = false
        for (z = 0; z < 배구.length; z++) {
            for (k = 0; k < 배구[z].length; k++) {
                if (달리기[x][y] == 배구[z][k]) {
                    check = true
                }
            }
        }
        if (check == false) {
            console.log(달리기[x][y])
            c[cIdx] = 달리기[x][y]
            cIdx += 1
        }
    }
}

for (x = 0; x < 배구.length; x++) {
    for (y = 0; y < 배구[x].length; y++) {
        var check = false
        for (z = 0; z < 달리기.length; z++) {
            for (k = 0; k < 달리기[z].length; k++) {
                if (배구[x][y] == 달리기[z][k]) {
                    check = true
                }
            }
        }
        if (check == false) {
            console.log(배구[x][y])
            c[cIdx] = 배구[x][y]
            cIdx += 1
        }
    }
}

console.log(c)