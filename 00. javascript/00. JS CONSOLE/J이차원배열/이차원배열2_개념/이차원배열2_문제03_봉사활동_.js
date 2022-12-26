/*	
    a배열은 철수네반 학생 목록이다.
    b배열은 이번에 봉사활동을 다녀온학생들이다.
    c배열에 봉사활동을 가지않은 학생들을 저장후 출력 

*/

var a = [
    ["김철수", "이서영", "최민식"],
    ["조춘자", "김말숙", "이진상"],
    ["유재석", "박명수", "킬리만자로"],
];
var b = ["조춘자", "김말숙", "이진상", "최민식"];
var c = [];
var cIdx = 0

for (i = 0; i < a.length; i++) {
    var check = false
    for (j = 0; j < a[i].length; j++) {
        for (y = 0; y < b.length; y++) {
            if (b[y] == a[i][j]) {
                check = true
                console.log(c)
            }
        }
        if (check == false) {
            console.log("체크가 거짓일 때", a[i][j])
            console.log("===================")
            c[cIdx] = a[i][j]
            cIdx += 1
        } else {
            console.log("체크가 참일 때", a[i][j])
            console.log("===================")
        }
    }
}

console.log(c)