/*
	[정렬]
	 두 배열을 하나로 합치고 오름차순으로정렬하시오.	
		  var arr1 = [9,10,3,2,20,19];
		var arr2 = [15,12,1,5,7,8];	
		var test = []
	 예) 1,2,3,5,7,8,9,10,12,15,19,20

 */
var arr1 = [9, 10, 3, 2, 20, 19];
var arr2 = [15, 12, 1, 5, 7, 8];
var test = []
var a1I = 0
var a2I = 0
var min = 0
for (i = 0; i < arr1.length + arr2.length; i++) {
	if (i < arr1.length) {
		test[i] = arr1[a1I]
		a1I += 1
	} else {
		test[i] = arr2[a2I]
		a2I += 1
	}
}
console.log(test)

var temp = 0
var idx = 0
var check = false
for (i = 0; i < test.length; i++) {
	min = test[i]
	check = false
	for (j = i + 1; j < test.length; j++) {
		console.log("1.", "i는", i, "최소값은", min)
		if (test[j] < min) {
			check = true
			min = test[j]
			idx = j
			console.log("2. 최소값은", min, "최소값의 인덱스는", idx)
		}
	}

	if (check) {
		temp = test[i]
		test[i] = min
		test[idx] = temp
	}
	console.log(test)

	console.log("=============================================",)

}



