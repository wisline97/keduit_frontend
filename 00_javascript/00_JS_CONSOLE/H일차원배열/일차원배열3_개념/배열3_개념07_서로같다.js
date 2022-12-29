
/*
	[문제]
		arr1배열의 의 값이 arr2배열의 같은위치의 값들과  서로 같은지 검사하시오.
		전부 같으면 true를 출력하고, 
		틀린 값이 하나라도 있으면 false를 출력하시오.


		int[] arr1 = {1, 2, 3, 1, 2, 3};
		int[] arr2 = {1, 2, 3, 5, 2, 3};
 */

let check = true

let arr1 = [1, 2, 3, 1, 2, 3];
let arr2 = [1, 2, 3, 2, 2, 3];

let idx = arr1.length

for (i = 0; i < idx; i++) {
	if (arr1[i] != arr2[i]) {
		check = false
	}
}

console.log(check)