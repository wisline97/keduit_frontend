/*
		[문제]
			철수가 편의점에서 우유를 15개 구입할려고한다. 
			한개에 1000원인 흰우유와 
			한개에 1200원인 초코우유를 합쳐서 총 15개 구입했다.
			20000원을 내고 4200원을 거슬러받았을때 
			철수가 구입한 흰우유는 몇개인가요??
	 */

//흰우유
let a = 0

//초코우유
let b = 15

while(true){
	if(a+b == 15 && 20000 - ((1000*a) + (1200*b)) == 4200){
		console.log("철수가 구입한 흰 우유 개수는",a,"개")
		break
	}
	a += 1
	b -= 1
}