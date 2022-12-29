/*
  var str = "김철수/87,이만수/42,이영희/95";
// 위 데이터에서 꼴등을 삭제후 다시 문자열로 변경
	
//1) 문자열을 잘라서 배열에 저장한다.
//2) 배열에서 꼴등을 삭제한다
//3) 삭제한배열을 다시 문자열로 만든다.
 
// str = "김철수/87,이영희/95";
*/

var str = "김철수/87,이만수/42,이영희/95";

var arr = str.split(",")
console.log(arr)
var min = 100
var minIdx = 0
for (i = 0; i < arr.length; i++) {
  arr[i] = arr[i].split("/")
  arr[i][1] = parseInt(arr[i][1])
  if (arr[i][1] < min) {
    min = arr[i][1]
    minIdx = i
  }
}

var delMin = arr.splice(minIdx, 1)

var nameData = []
var scoreData = []

for (i = 0; i < arr.length; i++) {
  nameData[i] = arr[i][0]
  scoreData[i] = arr[i][1]
}

console.log(nameData)
console.log(scoreData)

var answer = ""

for (i = 0; i < nameData.length; i++) {
  answer += nameData[i] + "/" + scoreData[i] + ","
}

answer = answer.substring(0, answer.length - 1)

console.log(answer)