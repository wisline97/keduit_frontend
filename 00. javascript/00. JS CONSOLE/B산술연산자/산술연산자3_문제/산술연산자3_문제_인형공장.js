/*
	[문제]
		인형 공장에서 인형 10개를 생산하는데,
		불량을 염두해두고 1개씩 더만든다.
		인형을 1200개 주문받았을때,
		인형은 총 몇개생산해야되는지 구하시오.	
		
	[정답] 1320
 */

let order = 1200;
let spare = order / 10;

const total = order + spare;

console.log(total, "개");
