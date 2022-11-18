/* 

프로그래머스 lv 0
옷가게 할인

var answer = 0;
var price = 543553;

if (price >= 100000) {
  answer = price - price * 0.05;
} else if (price >= 300000) {
  answer = price - price * 0.1;
} else if (price >= 500000) {
  answer = price - price * 0.2;
} else if (price < 100000) {
  answer = price;
} */

/* console.log(price / 100000);

if (price / 100000 < 1) {
  answer = price;
} else if (price / 100000 >= 1 && price / 100000 < 3) {
  answer = price - price * 0.05;
} else if (price / 100000 >= 3 && price / 100000 < 5) {
  answer = price - price * 0.1;
} else if (price / 100000 >= 5) {
  answer = price - price * 0.2;
}

console.log(Math.floor(answer));

*/

/*
프로그래머스
문자열 거꾸로 재배치하기
var my_string = "bread";
var strSplit = my_string.split("");
var strReverse = strSplit.reverse();
var answer = strReverse.join("");

console.log(strSplit);
console.log(strReverse);
console.log(answer);
*/

/*
프로그래머스
숫자의 각 자리수 모두 더하기
var answer = 0;
var n = 1234;
var numToStr = String(n);
var numToArr = numToStr.split("");
var strToNum = [];

for (i = 0; i < numToArr.length; i++) {
  console.log(parseInt(numToArr[i]));
  strToNum.push(parseInt(numToArr[i]));
}

for (a = 0; a < strToNum.length; a++) {
  answer = answer + strToNum[a];
}

console.log(strToNum);
console.log(answer);
*/

/*
프로그래머스
특정 문자 제거하기
첫시도

var my_string = "BCBdbe";
var letter = "B";
var arrNum = my_string.indexOf(letter);

var strToarr = my_string.split("");

strToarr.splice(strToarr[arrNum], 1);

console.log(strToarr);

console.log(arrNum);
console.log(strToarr[arrNum]);
*/

/*
프로그래머스
특정 문자 제거하기
두번째 시도


var my_string = "BCBdbe";
var letter = "B";
var strToarr = my_string.split("");

for (i = 0; i < strToarr.length; i++) {
  if (strToarr[i] == letter) {
    strToarr.splice(i, 1);
  }
}

console.log(strToarr);
*/

/*
프로그래머스
특정 문자 제거하기
문제점 발견

letter로만 이루어진 my_string은 아래 함수가 제대로 작동되지 않음

function solution(my_string, letter) {
  var strToArr = my_string.split("");
  for (i = 0; i < strToArr.length; i++) {
    if (strToArr[i] == letter) {
      strToArr.splice(i, 1);
    }
  }

  var answer = strToArr.join("");
  console.log(answer);
  return answer;
}

solution("ii", "i");
*/

/*
내가 푼 정답
function solution(my_string, letter) {
  var regexAll = new RegExp(letter, "g");
  var answer = my_string.replace(regexAll, "");
  return answer;
}
*/
var my_string = "BCBdbe";
var letter = "B";

console.log(my_string.split(letter).join(""));
