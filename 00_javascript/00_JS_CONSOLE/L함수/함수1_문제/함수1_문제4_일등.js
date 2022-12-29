
/*
    아래 배열은 시험점수와 학생이름이다. 
    일등의 학생이름을 출력해주는 함수를 만드시오.
    
*/
var userName = ["이만수", "김철수", "박민지"];
var score = [54, 32, 92];

function rank(a, b) {
    //등수별 정렬
    for (i = 0; i < userName.length - 1; i++) {
        if (b[i] > b[i + 1]) {
            var scoreTemp = b[i]
            var userNameTemp = a[i]
            b[i] = b[i + 1]
            a[i] = a[i + 1]
            b[i + 1] = scoreTemp
            a[i + 1] = userNameTemp
        }
    }
    var $1st = a[a.length - 1]
    //1등 이름 출력
    console.log($1st)
}

rank(userName, score)