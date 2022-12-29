/*  
	  [문제]
		   철수는 자전거로 운동장한바퀴도는데 70초 , 
		   민수는 90초가 걸린다. 
		   30분동안 운동장을 돌면 출발점에서 
		   다시만나는회수가 몇번인지 구하시오.
		   단, 30분동안 항상일정한 속도를 유지한다. 
	 
	 */

let time = 30 * 60
let chulsu = 70
let minsu = 90
let count = 0

for (time; time >= 0; time--) {
	if (time != 0 && time % chulsu == 0 && time % minsu == 0) {
		console.log(time)
		count += 1
	}
}

console.log(count, "번")