/*
[문제] 
아래는 시험결과 이다 시험에 합격한 사람의 번호만 win2 에 저장한다. (60점이상 합격)
단, 앞에서부터 저장하시오.
[예] 
win2 = [1001, 1003, 0];

 
    */
var student = [1001, 80, 1002, 23, 1003, 78];
var win2 = [0, 0, 0];
let idx = student.length - 1
let y = 0

for (i = 0; i < idx; i += 2) {
    if (i < idx) {
        if (student[i + 1] >= 60) {
            win2[y] = student[i]
            y += 1
        }
    }
}

console.log(win2)