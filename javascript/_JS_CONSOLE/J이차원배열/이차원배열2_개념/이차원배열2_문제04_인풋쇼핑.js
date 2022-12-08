/*
	nameList 배열은 상품이름리스트 , 
	dataList 2차원배열은 각각 가격 , 상품개수 리스트목록이다 .		
	예) 현재 재고는 새우깡은 3개 , 감자깡 1개 , 고래밥 1개 있다.			
	아래 배열은 오늘 주문이 들어온순서이다.
	총매출을 출력해보세요.	
	예) 첫번째 1 ==> 감자깡의 개수는 1이므로 판매할수있다.
	예) 두번째 2 ==> 고래밥의 개수는 1이므로 판매할수있다.
	예) 세번째 2 ==> 고래밥의 개수가 이미 두번째에서 구입해서 0이되므로 판매불가.
	....		
	주문은 총  새우깡 2개 , 감자깡 3개 , 고래밥 3개 들어왔지만 ,
	실제 판매한 품목은  새우깡 2개 , 감자깡 1개 , 고래밥 1개 이다.	
*/
var dataList = [
	["이름", "가격", "재고"],
	["새우깡", 1000, 3],
	["감자깡", 2300, 1],
	["고래밥", 3100, 1]
];
var input = [1, 2, 2, 0, 0, 2, 1, 1];
var sellPrice = 0;
for (i = 0; i < input.length; i++) {
	input[i] += 1
}
// input = [2, 3, 3, 1, 1, 3, 2, 2]
console.log("===================================")
for (i = 0; i < input.length; i++) {
	var 판매체크 = false
	if (dataList[input[i]][2] == 0) {
		console.log("[주문", i + 1, "]", dataList[input[i]][0], "1개")
		console.log("재고 부족으로 인한 판매불가")
		console.log("===================================")
	} else {
		console.log("[주문", i + 1, "]", dataList[input[i]][0], "1개")
	}
	for (j = 1; j < dataList.length; j++) {
		for (y = 0; y < dataList[j].length; y++) {
			if (dataList[input[i]][2] != 0 && 판매체크 == false) {
				dataList[input[i]][2] -= 1
				sellPrice += dataList[input[i]][1]
				console.log("[판매]", dataList[input[i]][0], "1개")
				console.log("[남은 재고]", dataList[input[i]][2])
				console.log("===================================")
				판매체크 = true
			}
		}
	}

}

console.log(sellPrice, "원")


/* //카페에 올라온 정답
var dataList = [
	["새우깡", 1000, 3],
	["감자깡", 2300, 1],
	["고래밥", 3100, 1]
];
var input = [1, 2, 2, 0, 0, 2, 1, 1];
var sellPrice = 0;

for (var i = 0; i < input.length; i++) {
	var index = input[i]
	var price = dataList[index][1];
	var stock = dataList[index][2];
	console.log(dataList[index][0], dataList[index][1], dataList[index][2]);
	if (stock > 0) {
		sellPrice += price;
		dataList[index][2] -= 1;
	} else {
		console.log("재고부족")
	}
}

console.log(sellPrice) */