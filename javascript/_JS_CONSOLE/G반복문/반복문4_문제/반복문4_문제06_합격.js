/*
       [문제]
	        철수는 두번의 시험에서 각각 80점과 72점을 받았다.
	        세 번째 시험에서 최소 몇 점이상을 받아야 
	        
	        세번의 시험성정의 평균이 82점이상이 될수 있을까?
	  */

let test1 = 80
let test2 = 72
let test3 = 0


while(true){
	let average = (test1 + test2 + test3) / 3
	if(average>=82){
		console.log("최소",test3,"점 이상을 받아야한다.")
		break
	}
	test3 += 1
}

