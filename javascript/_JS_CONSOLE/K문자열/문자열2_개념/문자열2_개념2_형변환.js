/*
// 문제) 이름은 name배열에 성적은 score배열에 각각 저장 및 출력
	
*/

var str = "김철수/87,이만수/42,이영희/95"
var userName = [];
var score = [];

var arr = str.split(",")

console.log(arr)

for (i = 0; i < arr.length; i++) {
    arr[i] = arr[i].split("/")
}

for (i = 0; i < arr.length; i++) {
    arr[i][1] = parseInt(arr[i][1])
}

for (i = 0; i < arr.length; i++) {
    userName[i] = arr[i][0]
    score[i] = arr[i][1]
}

console.log(userName)
console.log(score)

