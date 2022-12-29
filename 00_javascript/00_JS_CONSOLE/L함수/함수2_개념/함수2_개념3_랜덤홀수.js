/*  
    배열에 랜덤으로(-100 ~ 100 사이의 홀수 4개를 저장후 전부 홀수인지 검사하는 함수를 만드시오
*/

function setRandom(arr) {
    for (var i = 0; i < 4; i++) {
        var ran = parseInt(Math.random() * 201) - 100;
        arr[i] = ran;
    }
    console.log(arr)
}
function checkArr(arr) {
    var check = false;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            check = true;
            break;
        }
    }
    if (check == false) {
        console.log("전부홀수이다.");

    } else {
        console.log("전부홀수가 아니다.");
    }
}

var arr = [];
setRandom(arr);
checkArr(arr);

