/*
	아래데이터는 식권자판기의 데이터이다.
	money 는 돈의 단위를 나타낸다.
	chargeList 는 현재 남아있는 잔돈의 개수이다. 
	price 는 식권의 가격이다. 

	input은 사용자가 입금한금액이고,
	count는 식권을 구매한개수이다.
	잔돈을 거슬러 주고난 chargeList의 결과를 출력하시오. 

	[예시] 거스름돈은 10000 - 3200 * 2 = 3600이고,
	잔돈은 1000 1개, 500 4개, 100 10개이므로 거슬러줄수있다. 
	최종적으론 아래와 같이 될것이다. 
	moneyData  = [50000, 10000, 5000, 1000, 500, 100];
	chargeList = [    1,     2,    1,    0,   0,  4]
*/
var moneyData = [50000, 10000, 5000, 1000, 500, 100];
var chargeList = [1, 1, 1, 1, 4, 10];
var price = 3200;		// 식권 가격
var input = 10000;
var count = 2;

var change = input - (price * count)

while (true) {
	if (change == 0) {
		break
	}
	for (i = 0; i < chargeList.length; i++) {
		if (change != 0 && moneyData[i] <= change && chargeList[i] != 0) {
			chargeList[i] -= 1
			change -= moneyData[i]
			console.log("거스름돈 잔액", change)
			console.log("남은 잔돈", chargeList)
		}
	}
}