/*
	[문제]
		현금이 10000원을 가지고,
		가격이 1200원인 과자 6개를 구입 후 거스름돈을 구하시오.
		단, 과자를 3개를 구입할때마다 200원씩 할인해주는 행사를 진행중이다. 
		
	[정답] 
		3200
 */

let total = 10000;
let snack = 1200;
let count = 6;
let discount = (200 * count) / 3;

let change = total - snack * count + discount;

console.log(change, "원");
