/*
    [예매확인]
    [1] seatList 는 영화관 7자리를 나타낸다. 
    
    [2] seatList 의 값들은 영화관 예매한 회원번호를 나타낸다. 
    
    [3] find 는 검색하고자하는 회원번호이다.입력 한다.
    
    [4] find 의 값을 영화관에서 찾아 자리를 출력해주자
        (예) 1003 이므로 영화관 0, 1 번이다.
    [5] 찾는 값이 없으면 "없다" 를 출력한다.  
*/

var seatList = [1003, 1003, 0, 0, 1002, 0, 1005];
var find1 = 1003;
var find2 = 1001;

let idx = seatList.length
let check = false
for (i = 0; i < idx; i++) {
    if (seatList[i] == find1) {
        console.log(find1, "번 회원님이 예매한 좌석은", i + 1, "번 좌석입니다.")
        check = true

    }
}
if (check == false) {
    console.log(find2, "번 회원님이 예매한 좌석을 찾을 수 없습니다.")
}

check = false
for (i = 0; i < idx; i++) {
    if (seatList[i] == find2) {
        check = true
    }
}

if (check == false) {
    console.log(find2, "번 회원님이 예매한 좌석을 찾을 수 없습니다.")
}