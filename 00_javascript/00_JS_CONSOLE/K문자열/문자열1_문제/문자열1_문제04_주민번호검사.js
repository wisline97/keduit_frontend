/*

	
 */

var jumin = "890101-2012932";
var 나이 = 2022 - parseInt("19" + jumin.substring(0, 2))
var 성별 = jumin.substring(7, 8) == 1 ? "남" : "여"
console.log(나이, "세")
console.log(성별, "성")
	// 문제 1) 성별 출력
	// 문제 2) 나이 출력
