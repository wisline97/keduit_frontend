/*	
문제 1) 각층별 관리비 합 출력
정답 1) 4400, 7100, 5400		
문제 2) 호를 입력하면 관리비 출력
정답 2) 입력 : 202	관리비 출력 : 2000	
문제 3) 관리비가 가장 많이 나온 집, 적게 나온 집 출력
정답 3) 가장 많이 나온 집(201), 가장 적게 나온 집(303)		
문제 4) 호 2개를 입력하면 관리비 교체 (101 , 102) ==>  (2100, 1000)		
문제 5) 관리비 많이 나온순서대로 관리비와 호수 출력 (정렬)
*/
var apt = [
	[101, 102, 103],
	[201, 202, 203],
	[301, 302, 303]

];

var pay = [
	[1000, 2100, 1300],
	[4100, 2000, 1000],
	[3000, 1600, 800]
];

console.log("==========================================")
console.log("[문제 1]")

for (i = 0; i < apt.length; i++) {
	console.log("---------------------------------")
	var total = 0
	for (j = 0; j < apt[i].length; j++) {
		total += pay[i][j]
	}
	console.log(i + 1, "층 관리비 총합", total, "원")

}
console.log("==========================================")
console.log("[문제 2]")

var input = 302

for (i = 0; i < apt.length; i++) {
	for (j = 0; j < apt[i].length; j++) {
		if (input == apt[i][j]) {
			console.log(input, "호의 관리비는", pay[i][j], "원입니다.")
		}
	}
}
console.log("==========================================")
console.log("[문제 3]")

var min = 9999
var max = 0

for (i = 0; i < apt.length; i++) {
	for (j = 0; j < apt[i].length; j++) {
		if (pay[i][j] > max) {
			max = pay[i][j]
		}
		if (pay[i][j] < min) {
			min = pay[i][j]
		}
	}
}
for (i = 0; i < apt.length; i++) {
	for (j = 0; j < apt[i].length; j++) {
		if (pay[i][j] == max) {
			console.log("관리비가 가장 많이 나온 호수는", apt[i][j], "호")
			console.log("---------------------------------")
		}
		if (pay[i][j] == min) {
			console.log("관리비가 가장 적게 나온 호수는", apt[i][j], "호")
		}
	}
}

console.log("==========================================")