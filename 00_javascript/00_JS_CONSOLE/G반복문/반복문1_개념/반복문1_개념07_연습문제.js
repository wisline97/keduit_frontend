/*
		[문제] 1~5까지의 합을 출력하시오.  1 + 2 + 3 + 4 + 5
		[정답] 15
	
	*/
let num = 0
let y = 0
let i = 1
while (i <= 5){
	num += i
	console.log(y,"+",i,"=",num)
	y = num
	i+=1
}