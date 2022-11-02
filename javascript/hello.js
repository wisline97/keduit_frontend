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
var my_string = "bread";
var strSplit = my_string.split("");
var strReverse = strSplit.reverse();
var answer = strReverse.join("");

console.log(strSplit);
console.log(strReverse);
console.log(answer);
*/
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
