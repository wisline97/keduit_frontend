
/*
    영화관 예매를 기록할려고한다. 영화관크기는 4 * 3 사이즈이다 (y , x) 		
    input의 데이터는 3개씩 5 번이다. 
    input의 데이터3개는 각각 [y , x , 회원번호]를 뜻한다. 		
    input의 데이터를 영화관에 기록후 출력 
    var 영화관 = [
            [0,0,0],
            [0,0,0],
            [0,0,0],
            [0,0,0]
        ];		
    var input = [
            [1,1,1001],
            [2,1,1003],
            [0,0,1006],
            [1,1,1007],
            [0,0,1006],
    ]; 

    ---------------------------------------------------------
    [1] [ 1,1,1001 ] 
    [출력 : 예매를 완료합니다.]
        [0,0,0],
        [0,1001,0],
        [0,0,0],
        [0,0,0]
    ---------------------------------------------------------
    [2] [2,1,1003]
    [출력 : 예매를 완료합니다.]
        [0,0,0],
        [0,1001,0],
        [0,1003,0],
        [0,0,0]
    ---------------------------------------------------------
    [3] [ 0,0,1006 ] 
    [출력 : 예매를 완료합니다.]
        [1006,0,0],
        [0,1001,0],
        [0,1003,0],
        [0,0,0]
    ---------------------------------------------------------
    [4] [1,1,1007]
        [출력 : 이미 예매한 자리입니다.] // 1001이 이미 예메한자리이다.
    ---------------------------------------------------------
    [5] [0,0,1006] 
    [출력 : 예매를 취소합니다.] // 자기가 자리이므로 취소한다.
        [0,0,0],
        [0,1001,0],
        [0,1003,0],
        [0,0,0]
*/
var 영화관 = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
];
var input = [
    [1, 1, 1001],
    [2, 1, 1003],
    [0, 0, 1006],
    [1, 1, 1007],
    [0, 0, 1006],
];

for (i = 0; i < input.length; i++) {
    var user = input[i][2]
    var x = input[i][1]
    var y = input[i][0]
    if (영화관[y][x] == 0) {
        console.log(y, "열", x, "석을 예매합니다.")
        영화관[y][x] = user
    } else if (영화관[y][x] != 0 && 영화관[y][x] == user) {
        console.log(y, "열", x, "석 예매를 취소합니다.")
        영화관[y][x] = 0
    } else if (영화관[y][x] != 0 && 영화관[y][x] != user) {
        console.log(y, "열", x, "석은 이미 선점된 좌석입니다.")
    }
}

console.log(영화관)