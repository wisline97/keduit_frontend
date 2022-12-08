/*
	
		  [테스트]
				아래배열은 철수와 민수의 가위바위보 데이터이다. 
				왼쪽이 철수의 데이터이고 오른쪽이 민수의 데이터이다
		  	
				가위 , 바위 , 보
				
				민수와 철수는 계단 50번째 에서 게임을 시작했으며, 아래의 규칙을따른다.
				[규칙]
					이기면 계단 5증가
					비기면 계단 1증가
					지면 계단 3감소 
				
				철수는 게임이 종료후 몇번째 계단에 있을까?
	 */

/* 철수, 민수 */
var arr = [
	["바위", "가위"],
	["바위", "보"],
	["보", "가위"],
	["가위", "가위"],
	["바위", "바위"],
	["보", "바위"]]
var pos = 50;
var won = 5
var draw = 1
var lost = -3

for (i = 0; i < arr.length; i++) {
	console.log(i + 1, "번째 턴")
	var check = "비김"
	var chulsu = arr[i][0]
	var minsu = arr[i][1]

	if (chulsu == "바위" && minsu == "바위") {
		check = "비김"
	}
	if (chulsu == "바위" && minsu == "가위") {
		check = "승리"
	}
	if (chulsu == "바위" && minsu == "보") {
		check = "패배"
	}

	if (chulsu == "가위" && minsu == "바위") {
		check = "패배"
	}
	if (chulsu == "가위" && minsu == "가위") {
		check = "비김"
	}
	if (chulsu == "가위" && minsu == "보") {
		check = "승리"
	}

	if (chulsu == "보" && minsu == "바위") {
		check = "승리"
	}
	if (chulsu == "보" && minsu == "가위") {
		check = "패배"
	}
	if (chulsu == "보" && minsu == "보") {
		check = "비김"
	}

	if (check == "승리") {
		console.log("====================================")
		console.log("철수는", chulsu, "민수는", minsu)
		console.log("철수 승!")
		console.log(won, "칸 올라갑니다.")
		pos += won
		console.log("====================================")
		console.log("[", i + 1, "]", "철수의 현재 위치는", pos, "칸 입니다.")
		console.log("====================================")
	}
	if (check == "패배") {
		console.log("====================================")
		console.log("철수는", chulsu, "민수는", minsu)
		console.log("철수 패!")
		console.log(lost, "칸 내려갑니다.")
		pos += lost
		console.log("====================================")
		console.log("[", i + 1, "]", "철수의 현재 위치는", pos, "칸 입니다.")
		console.log("====================================")
	}
	if (check == "비김") {
		console.log("====================================")
		console.log("철수는", chulsu, "민수는", minsu)
		console.log("철수와 민수 비김!")
		console.log(draw, "칸 올라갑니다.")
		pos += draw
		console.log("====================================")
		console.log("[", i + 1, "]", "철수의 현재 위치는", pos, "칸 입니다.")
		console.log("====================================")
	}
}

console.log("철수의 최종 위치는", pos, "칸 입니다.")