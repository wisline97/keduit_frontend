/*
	아래 indexList 의 순서대로 arr 배열의 값을 삭제 하려고 한다. 
	삭제는 indexList 의 값위치까지 맨뒤에서 부터 한칸씩 앞으로 전진하고,
	맨뒤는 0을 저장한다. 
	indexList위치의 값이 0이면 "삭제불가" 메세지를 출력한다.

	[1] indexList = 2 ==>  arr = [10,20,40,50,0]
	[2] indexList = 1 ==>  arr = [10,40,50,0,0]
	[3] indexList = 0 ==>  arr = [40,50,0,0,0]
	[4] indexList = 3 ==>  arr = "삭제불가"

*/
var arr = [10, 20, 30, 40, 50];
var indexList = [2, 1, 0, 3];