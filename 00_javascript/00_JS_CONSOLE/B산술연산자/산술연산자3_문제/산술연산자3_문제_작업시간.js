/*
	[문제]
		어느 공장에서 한사람이 1시간에 컴퓨터를 4대를 조립할수 있다고 한다.
		세명이 컴퓨터 96대를 조립하는데 필요한시간을 구하시오.
		
		[정답] 8
*/

let onePerson = 4;
let output = 3 * onePerson;
let order = 96;
const timeRequired = order / output;

console.log(timeRequired, "시간");
