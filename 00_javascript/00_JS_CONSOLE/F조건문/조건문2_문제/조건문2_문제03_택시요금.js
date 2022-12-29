/*
	[문제]
		택시기본요금은 10000원입니다.		
		기본요금으로는  10km 까지 이동 가능합니다. 		
		10km이상 이동시 추가요금이 발생합니다. 		
		추가요금은 3km이동할때마다 2300원씩 요금이 추가됩니다.			
		이동거리를 입력받고 요금출력하시오.	
*/

let taxiBasic = 10000;
let standard = 10;
let extraPee = 2300;
let extra = 3;

const 이동거리 = parseInt(Math.random() * 50 + 1);

let 추가이동거리 = 이동거리 - standard;

console.log(이동거리);

if (이동거리 <= 10) {
  console.log("이동한 거리:", 이동거리);
  console.log("택시 요금은", taxiBasic);
} else {
  
  let 추가요금 = 추가이동거리 % extra == 0 ? (추가이동거리 / extra) * extraPee : (parseInt(추가이동거리 / extra) + 1) * extraPee;
  let taxiPee = 추가요금 + taxiBasic
  console.log("이동한 거리:", 이동거리);
  console.log("택시 요금은", taxiPee);
}
