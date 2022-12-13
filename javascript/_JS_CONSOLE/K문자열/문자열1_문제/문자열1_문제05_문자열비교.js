/*
		user 의 값이 userData 에 있는 지 검사


		var userData = "김철수,이만수,박명수,오지명";
		var user = "박명수";

	 */
var userData = "김철수,이만수,박명수,오지명";
var user = "박명수";

var userArr = userData.split(",")

console.log(userArr)
var check = false
for (i = 0; i < userArr.length; i++) {
	if (userArr[i] == user) {
		check = true
	}
}

if (check) {
	console.log("해당 유저는 유저 데이터 안에 속해 있습니다.")
} else {
	console.log("해당 유저는 유저 데이터 안에 없습니다.")
}