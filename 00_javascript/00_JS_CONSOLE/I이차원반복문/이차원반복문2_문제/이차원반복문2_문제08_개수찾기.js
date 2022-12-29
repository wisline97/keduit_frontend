
/*
 * [개수찾기]
 
		 아래배열의 문자들을 새로운배열두개를 만들어서 문자별 개수로 모으시오.
	 var arr = [ "a", "b", "c", "c", "d", "a", "c", "c", "b", "c", "b" ];	
		 var str = ["a","b","c","d"];
		 var count = [2,3,5,1];


		
 */

var arr = ["a", "b", "c", "c", "d", "a", "c", "c", "b", "c", "b"];
var str = [];
var count = [];
var check = false
var counts = 0
var strIdx = 0
var cntIdx = 0

for (i = 0; i < arr.length; i++) {
	var val = arr[i]
	check = false
	for (j = 0; j < arr.length; j++) {
		if (val == str[j]) {
			check = true
		}
	}
	if (check == false) {
		str[strIdx] = arr[i]
		strIdx += 1
	}
}

console.log(str)

for (i = 0; i < str.length; i++) {
	counts = 0
	for (j = 0; j < arr.length; j++) {
		if (str[i] == arr[j]) {
			counts += 1
		}
	}
	count[i] = counts
}

console.log(count)












/* var temp = 0

for (i = 0; i < arr.length; i++) {
	counts = 1
	for (j = i + 1; j < arr.length; j++) {
		if (arr[i] == arr[j] && temp != arr[i]) {
			check = true
			counts += 1
		}
	}
	count[cntIdx] = counts
	cntIdx += 1
	if (temp != arr[i]) {
		str[strIdx] = arr[i]
		strIdx += 1
	}
	temp = arr[i]
}

console.log(str)
console.log(count) */