/*
     아래배열이 앞에서 부터 출력하나 뒤에서 부터
     거꾸로 출력하나 똑같은수 인지 판별하시오.	
     앞에서 출력하나 뒤에서 출력하나 서로 같으면
     true 하나라도 틀리면 false 를 출력하시오.

 */
var arr1 = [1, 5, 4, 3, 3, 4, 5, 1];
let check = true
let idx = arr1.length - 1
let count = arr1.length / 2

for (i = 0; check; i++) {
    if (arr1[i] == arr1[idx]) {
        console.log(arr1[i], arr1[idx])
        count -= 1
    } else {
        check = false
    }
    idx -= 1
    if (count == 0) {
        break
    }


}


console.log(check)