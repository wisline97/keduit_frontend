/*	
    // 문제1) 아래 val 배열의 값을 랜덤으로 하나 뽑고 그값이 arr 과 비교후 인덱스 2개 출력

    [예시] 
        ran = 2 
        var[2] = 30
        arr 배열의 30의  인덱스는 0, 2 이다 
    정답 0, 2
*/

var val = [10, 20, 30, 40, 50, 60, 70, 80, 90];
var arr = [[10, 20, 30], [40, 50, 60], [70, 80, 90]];

var num = parseInt(Math.random() * 9)

for (i = 0; i < arr.length; i++) {
    for (j = 0; j < arr[i].length; j++) {
        if (val[num] == arr[i][j]) {
            console.log("arr 배열의", val[num], "값의 인덱스는", i, j, "이다")
        }
    }
}