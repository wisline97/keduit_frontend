/*
	[문제]
		[1] 1~15를 출력한다.
		[2] 5보다크고 10보다 작으면서 3의 배수일때는 숫자대신 "안녕"을 출력한다.
		[3] 그외는 전부 숫자를 출력한다. 
		
 */

		let i = 1

		while(i<=15){
			if(i>5 && i < 10){
				if(i%3 ==0){
					console.log("안녕")
				}else{
					console.log(i)
				}}else{
			console.log(i)
		}
			i+=1
		}