/*
		  [문제]
			철수는 13살 철수의 아버지는 45살이다. 
			몇년후 철수의 아버지는 철수나이의 3배가될까요?
		
	 */

//철수나이
let a = 13

//아버지 나이
let b = 45

//n년 후
let n = 0

while(true){
	if((a+n) * 3 == b+n){
		console.log(n,"년 후")
		console.log("철수가",a+n,"살일 때","아버지는", b+n,"세")
		break
	}
	n+=1
}