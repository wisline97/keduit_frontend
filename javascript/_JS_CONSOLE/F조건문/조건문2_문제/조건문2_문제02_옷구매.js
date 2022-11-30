/*
	[문제] 
		철수는 상점에서 24600원 짜리 옷을구매했습니다.
		500원짜리 동전으로만 옷값을 낸다면 동전이 몇개 필요한지 구하시오.
*/

let price = 24600;
let chulsuHas = 500;

if (price % chulsuHas == 0) {
  console.log(price / chulsuHas, "개");
} else {
  console.log(parseInt(price / chulsuHas) + 1, "개");
}
