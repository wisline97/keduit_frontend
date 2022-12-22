/*
// 배열 숫자 오른쪽으로 1칸 밀기
var arr = [3, 1, 2, 5, 6];
var end = arr.length - 1
for (i = 0; i < arr.length; i++) {
    if (i + 1 < arr.length) {
        arr[i] = arr[end]
        arr[end] = arr[end - 1]
        end -= 1
        console.log(arr)
    }
}

// 배열 숫자 왼쪽으로 1칸 밀기
var arr = [3, 1, 2, 5, 6];
for (i = 0; i < arr.length - 1; i++) {
    temp = arr[i + 1]
    arr[i + 1] = arr[i]
    arr[i] = temp
}

console.log(arr)

// 배열 숫자 오른쪽으로 1칸 밀기
var arr = [3, 1, 2, 5, 6];
var end = arr.length - 1
for (i = end; i > 0; i--) {
    temp = arr[i - 1]
    arr[i - 1] = arr[i]
    arr[i] = temp
}

console.log(arr) */

/* function solution(n) {
    console.log(n)
    var str = String(n)
    var arr = str.split("")
    for (i = 0; i < arr.length; i++) {
        for (y = 0; y < arr.length; y++) {
            if (i != y) {
                if (arr[i] > arr[y]) {
                    temp = arr[i]
                    arr[i] = arr[y]
                    arr[y] = temp
                }
            }
        }
    }
    console.log(arr)
}

solution(118372) */

/* var nums = [0, 1, 2, 3]
var answer = []
for (i = 0; i < nums.length; i++) {
    answer[i] = nums[nums[i]]
}

console.log(answer) */
// "10e1"
// "0001e0"

/* var answer = 0;
var str = "a234";
const regExp = /[a-zA-Z]/g;
var check = true;
for (var i = 0; i < str.length; i++) {
  if (regExp.test(str[i])) {
    check = false;
    console.log(str[i], "x");
  } else {
    console.log(str[i], "o");
  }
}

if (check == false) {
  answer = false;
} else if ((check == true && str.length == 4) || str.length == 6) {
  answer = true;
}
console.log(check);
console.log(answer);
/*
var NaNorNot = Number(str);

console.log("str를 숫자로 변형하면", NaNorNot);
console.log(isNaN(NaNorNot));
console.log(str.length);

if (isNaN(NaNorNot)) {
  answer = false;
} else if (str.length == 4 || str.length == 6) {
  answer = true;
} else {
  answer = false;
}

function solution(s) {
    var answer = 0;
    if(isNaN(Number(s))){
        answer = false
    } else if(s.length === 4 || s.length === 6){
        answer = true
    } else {
    answer = false
}
    return answer;
}
*/

/* var arr = [1, 0, 0, 0];
var answer = [];
var temp = 0;
var idx = 0;

for (i = 0; i < arr.length; i++) {
  if (arr[i] != temp) {
    answer[idx] = arr[i];
    idx += 1;
  }
  temp = arr[i];
}

console.log(answer);
 */

//에러발생코드
function solution(sides) {
  var max = 0;
  var total = 0;
  var answer = 0;
  var check = false;
  var temp = 999999;

  //sides의 원소가 모두 같은지 판별
  for (i = 0; i < sides.length; i++) {
    if (sides[i] == temp) {
      check = true;
    } else {
      check = false;
    }
    temp = sides[i];
  }

  //만약 check가 참이라면 정삼각형을 만들 수 있으므로 항상 1을 반환
  if (check == false) {
    for (i = 0; i < sides.length; i++) {
      if (sides[i] > max) {
        max = sides[i];
      }
    }
    for (i = 0; i < sides.length; i++) {
      if (sides[i] != max) {
        total += sides[i];
      }
    }
    answer = max < total ? 1 : 2;
  } else {
    answer = 1;
  }
  return answer;
}
/*
해결 
function solution(sides) {
    var max = 0;
    var total = 0;
    var answer = 0;
    var check = false;
    var temp = 999999
    
    //sides의 원소가 모두 같은지 판별
    for(i = 0; i < sides.length; i++){
        if(sides[i] == temp){
            check = true
        } else{
            check = false
        }
        temp = sides[i]
    }
    
    //만약 check가 참이라면 정삼각형을 만들 수 있으므로 항상 1을 반환
    if (check == false) {
        for (i = 0; i < sides.length; i++) {
            if (sides[i] > max) {
                max = sides[i];
            }
        }
        for (i = 0; i < sides.length; i++) {
                total += sides[i];
        }
        total = total - max
        answer = max < total ? 1 : 2; 
    } else {
        answer = 1;
    }
    return answer
} */
