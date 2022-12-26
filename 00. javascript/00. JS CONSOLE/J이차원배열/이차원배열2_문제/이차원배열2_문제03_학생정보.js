/*
		//[문제1] 여학생들 점수총합 과 남학생들의 점수총합을 비교하고 점수가 더큰쪽을 출력
		
		//[문제2] 평균이 60점이상이면 합격 : 합격생들 번호 이름 점수 출력 
		
		//[문제3] 이름을 입력하면 번호 점수 출력 
		
		//[문제4] 국어점수가 수학점수 보다 큰 학생들 번호 이름 출력 
		
		//[문제5] 1등 번호, 이름 출력 (여러명이면 전부 출력)
	 */

/*["번호", "이름", "성별", "국어", "수학"]*/
var student = [
	[1001, "이만수", "남", 10, 20],
	[1002, "이영희", "여", 70, 30],
	[1003, "김민정", "여", 64, 65],
	[1004, "이철민", "남", 13, 87],
	[1005, "오만석", "남", 49, 80],
	[1005, "최이슬", "여", 14, 90],
];

// [문제1]
console.log("==========================================")
console.log("[문제1]")
var girls = 0
var boys = 0
for (i = 0; i < student.length; i++) {
	if (student[i][2] == "남") {
		boys += student[i][3]
		boys += student[i][4]

	}
	if (student[i][2] == "여") {
		girls += student[i][3]
		girls += student[i][4]

	}
}

if (girls > boys) {
	console.log("여학생들의 총점이 더 크다.")
	console.log("여학생들의 총점은", girls, "점이다.")
} else {
	console.log("남학생들의 총점이 더 크다.")
	console.log("남학생들의 총점은", boys, "점이다.")
}

// [문제2]
console.log("==========================================")
console.log("[문제2]")
for (i = 0; i < student.length; i++) {
	var avarage = (student[i][3] + student[i][4]) / 2

	if (avarage >= 60) {
		console.log(student[i][0], "번", student[i][1], "학생", "(", student[i][2], ") 평균", avarage, "점 합격")
	}
}
// [문제3]
console.log("==========================================")
console.log("[문제3]")

var input = "최이슬"
console.log("입력받은 학생의 이름은", input, "입니다.")
for (i = 0; i < student.length; i++) {
	if (student[i][1] == input) {
		console.log(student[i][0], "번", student[i][1], "학생", "(", student[i][2], ")")
		console.log("국어점수:", student[i][3], "점")
		console.log("수학점수:", student[i][4], "점")
	}
}
console.log("==========================================")
console.log("[문제4]")
console.log("국어점수가 수학점수보다 높은 학생 목록")
for (i = 0; i < student.length; i++) {
	if (student[i][3] > student[i][4]) {
		console.log(student[i][0], "번", student[i][1], "학생", "(", student[i][2], ")")
		console.log("국어점수:", student[i][3], "점")
	}
}
console.log("==========================================")
console.log("[문제5]")
console.log("총점이 가장 높은 학생(1등)")
var max = 0
var maxIdx = 0
for (i = 0; i < student.length; i++) {
	var total = student[i][3] + student[i][4]
	if (total > max) {
		max = total
		maxIdx = i
	}
}
for (i = 0; i < student.length; i++) {
	if (student[i][3] + student[i][4] >= max) {
		console.log(student[i][1])
	}
}
console.log("==========================================")