/*
	[숫자이동게임]	
	move = [1,0,0,0,8,0,0,0,1];	 
	[1] move 안의 8은 플레이어이다
	[2] move 안의 0은 이동할수있는 길이다.
	[3] move 안의 1은 이동할수없는 벽이다. 

	input 배열의 내용을 순차적으로 실행하고,결과출력하시오.
	input의값중 1은 왼쪽이동 , 2는 오른쪽이동이다. 
	벽에서 이동하면, "이동할수없습니다" 출력 		
	시작=> [1,0,0,0,8,0,0,0,1];
	1 ==> [1,0,0,8,0,0,0,0,1];
	1 ==> [1,0,8,0,0,0,0,0,1];
	1 ==> [1,8,0,0,0,0,0,0,1];
	1 ==> "이동할수없습니다"
	2 ==> [1,0,8,0,0,0,0,0,1];
	2 ==> [1,0,0,8,0,0,0,0,1];
	2 ==> [1,0,0,0,8,0,0,0,1];


*/
var move = [1, 0, 0, 0, 8, 0, 0, 0, 1];
var input = [1, 1, 1, 1, 2, 2, 2];
console.log("=================================")
console.log("[            이동 전             ]")
console.log(move)
console.log("=================================")
for (i = 0; i < input.length; i++) {
	console.log(i + 1, "번째 턴")
	console.log("=================================")
	for (y = 0; y < move.length; y++) {
		if (move[y] == 8) {
			var location = y
			break
		}
	}
	if (input[i] == 1) {
		if (move[location - 1] != 1) {
			console.log("왼쪽으로 한 칸 이동합니다.")
			move[location] = 0
			move[location - 1] = 8
		} else if (move[location - 1] == 1) {
			console.log("이동할 수 없습니다.")
		}
	}

	if (input[i] == 2) {
		if (move[location + 1] != 1) {
			console.log("오른쪽으로 한 칸 이동합니다.")
			move[location] = 0
			move[location + 1] = 8
		} else if (move[location + 1] == 1) {
			console.log("이동할 수 없습니다.")
		}
	}
	console.log(move)
	console.log("=================================")
}


