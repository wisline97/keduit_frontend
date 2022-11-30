/*
	[문제]
	 	28 이상 999 이하의 28의 배수 중에서 가장큰수를 출력 
	[정답]
		980
*/

min = 28
max = 1000

while(true){
	if(max%28 == 0){
		console.log(max)
		break
	}
	max -= 1
}