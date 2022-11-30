/*
	[문제]
		철수는 볼펜을 (10~30) 개를 구입해야한다. 
		
		볼펜하나의 가격은 1200원이다. 	
		볼펜은 20개이상구매시 볼펜하나당 100원을 할인해주고있다. 
			
		볼펜수를 랜덤으로저장한다.
		철수가 지불해야하는 금액을 출력하시오.				
*/
const needPen = parseInt(Math.random() * 21 + 10);
let penPrice = 1200;
const discount = parseInt(needPen / 20);

if (needPen < 20) {
  console.log("철수가 구입해야하는 펜의 개수는", needPen, "개");
  console.log("총 금액은", needPen * penPrice, "원 입니다.");
} else {
  console.log("철수가 구입해야하는 펜의 개수는", needPen, "개");
  console.log("총 금액은", needPen * penPrice - needPen * 100, "원 입니다.");
}
