/*

	
	[무궁화 꽃이 피었습니다]
	doll 은 인형이고 , 이정재는 오징어 게임 참가자 이다. 	
	[1] 게임은 10회 반복된다. 
	[2] doll 매턴 마다 3~5를 랜덤으로 저장한다.
	[3] 이정재 배열 은 랜덤으로 1~4를 저장한다. 
	[4] 매턴마다 doll 보다 큰숫자가 나온 참가자는 움직인것으로 간주되어 탈락된다.
	[5] 10회 까지 살아남은 참가자의 번호를 출력하시오.
	[6] 1등의 번호를 출력하시오.

*/
var lee = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var doll = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
check = false;
for (var i = 0; i < 10; i++) {
	var r = parseInt(Math.random() * 4) + 1;
	var r2 = parseInt(Math.random() * 3) + 3;
	lee[i] += r;
	doll[i] += r2;
	if (r > r2) {
		check = true;
		break;
	}
}
console.log(lee);
console.log(doll);
if (check == false) {
	console.log("당첨");
} else {
	console.log("탈락");
}