
/*
    [omr]
        omr 배열은 정답이다.
        me 배열에 랜덤숫자(1~4) 를 5개 저장후,
        omr 과 비교하여 아래와 같이 출력하는 함수를 만드시오. 
    [예시]
        [1,4,3,2,1]
        [2,4,4,3,1]
        [x,o,x,x,o]
*/
function omrCheck(omr) {
    var me = [];
    var ox = [];
    for (var i = 0; i < omr.length; i++) {
        var ran = parseInt(Math.random() * 4) + 1;
        me[i] = ran;
        if (omr[i] == me[i]) {
            ox[i] = "o";
        } else {
            ox[i] = "x";
        }
    }
    console.log(omr);
    console.log(me);
    console.log(ox);

}
var omr = [1, 4, 3, 2, 1];
omrCheck(omr);
