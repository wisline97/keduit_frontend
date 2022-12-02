

/*
    [문제2] 아래는 시험결과 이다. 시험에 합격한사람의 번호만 win 에 저장한다. (60점이상합격)
    [조건1] 앞에서부터 저장하시오.
    [예] win1= [1002, 1003, 0];
    var number = [ 1001, 1002, 1003 ];
    var score = [ 50, 83, 78 ];
    var win1 = [ 0,0,0 ];
*/
var number = [1001, 1002, 1003];
var score = [50, 83, 78];
var win1 = [0, 0, 0];

var idx = number.length
var y = 0
for (i = 0; i < idx; i++) {
    if (score[i] >= 60) {
        win1[y] = number[i]
        y += 1
    }
}

console.log(win1)