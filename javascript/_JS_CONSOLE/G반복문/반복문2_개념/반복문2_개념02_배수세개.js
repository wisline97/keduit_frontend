/*
	  [문제] 
	  	7의 배수중 작은수부터 3개만 출력 하시오.
	    답 : 7,14,21
	 */

i = 1
count = 0

while(count<3){
	if(i%7==0){
		console.log(i)
		count+=1
	}
	i+=1
}