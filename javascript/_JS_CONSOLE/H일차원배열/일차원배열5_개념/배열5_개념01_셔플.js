
/*
		[셔플] 	
		 1) 인덱스 2개를 랜덤(0~5)으로 저장하고 각 인덱스의 값을 교환한다.
		 2) 위 1번을 10 번 반복하며 과정  출력 		
		예) 1 , 2 ==> [10,30,20,40,50,60];  // 20 과 30이 교환된다.		
		예) 4 , 1 ==> [10,50,20,40,30,60];  // 50 과 30이 교환된다.	
		예) 3 , 3 ==> [10,50,20,40,30,60]; // 같을땐 아무일도안생긴다.
		...
	*/

var arr = [10, 20, 30, 40, 50, 60];
var num1 = 0
var num2 = 0
var temp = 0

for (i = 0; i < 10; i++) {
	num1 = parseInt(Math.random() * 5)
	num2 = parseInt(Math.random() * 5)
	if (num1 != num2) {
		temp = arr[num1]
		arr[num1] = arr[num2]
		arr[num2] = temp
		console.log(num1, num2)
	} else {
		console.log("num1 과 num2의 값이 같습니다")
		console.log("아무런 변화도 일어나지 않습니다")
	}
	console.log(arr)
}