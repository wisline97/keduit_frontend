
/*
[교차합]
 
arr1은 앞에서부터 뒤로 반복한다.
arr2는 뒤에서부터 앞으로 거꾸로 반복한다. 
	
b에 arr1 과 arr2 각각의 값의 합을 저장후 출력한다. 
	
 예) b[0] = arr1[0] + arr2[4] 
 예) b[1] = arr1[1] + arr2[3] 
 .....
 예) b[4] = arr1[4] + arr2[0] 
	
int arr1[] = {11,21,31,41,51};
int arr2[] = {25,26,27,28,29};
int b[] = new int[5];
*/

var arr1 = [11, 21, 31, 41, 51];
var arr2 = [25, 26, 27, 28, 29];
var b = [];

var idx = arr1.length
var i = 0
var y = idx - 1

for (i = 0; i < idx; i++) {
    b[i] = arr1[i] + arr2[y]
    y -= 1
}