/*
  // 문제) 이름과 성적을 아래와같이   / 와 , 로 하나의 문자열로 연결
// 정답) "김철수/87,이만수/42,이영희/95"
*/

var userName = ["김철수", "이만수", "이영희"];
var score = [87, 42, 95];
var str = []
for (i = 0; i < userName.length; i++) {
  str[i] = userName[i] + "/" + score[i]
}
console.log(str)
var answer = str.join()
console.log(answer)
console.log(typeof (answer))

