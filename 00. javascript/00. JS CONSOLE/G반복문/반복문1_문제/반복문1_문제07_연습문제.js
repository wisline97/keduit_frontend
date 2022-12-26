/*
	[문제]
		[1] 5~15 사이를 전부출력한다.
		[2] 반복문 종료후 7보다 큰수중 4의배수의 개수를 출력한다.
 */

		let min = 5
		let max = 15
		let count = 0
		while(min <= 15){
			console.log(min)
			if (min > 7){
				if (min%4 == 0){
				count += 1
			}
			}
			min += 1
		}
		
		console.log("5와 15 사이의 숫자 중 7보다 크고 4의 배수인 숫자의 개수는",count)