/*
	[문제]						
		연필 7타를 여학생 3명과 남학생 4명에게 남김없이 똑같이 나누어 주었다.			
		여학생들이 받은 개수가 4의배수이거나,
		남학생들이 받은 개수가 4의배수이면 true 출력하시오.
		(연필 1타는 12자루)
*/

let pencil = 12 * 7;
let onePerson = pencil / 7;
let girl = onePerson * 3;
let boy = onePerson * 4;

console.log(girl % 4 == 0 || boy % 4 == 0);
